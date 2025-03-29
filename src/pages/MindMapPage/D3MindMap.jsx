import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Динамічне завантаження D3 (v3)
const loadD3 = () => {
  return new Promise((resolve, reject) => {
    if (window.d3) {
      resolve(window.d3);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://d3js.org/d3.v3.min.js";
    script.async = true;
    script.onload = () => resolve(window.d3);
    script.onerror = () => reject(new Error("Failed to load D3 library"));
    document.body.appendChild(script);
  });
};

// Функція для рекурсивного збору вузлів і зв’язків із ієрархічних даних
function collectNodesAndLinks(node, nodes = [], links = [], parent = null) {
  // Додаємо цей вузол у список nodes
  nodes.push(node);
  // Якщо є батько, додаємо зв’язок
  if (parent) {
    links.push({ source: parent, target: node });
  }
  // Рекурсивно для дітей
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) =>
      collectNodesAndLinks(child, nodes, links, node)
    );
  }
  return { nodes, links };
}

const D3MindMap = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    let isCancelled = false;

    loadD3()
      .then((d3) => {
        if (!isCancelled && d3Container.current && data) {
          const width = window.innerWidth;
          const height = window.innerHeight;

          // Очищаємо попередній SVG, якщо він існує
          d3.select(d3Container.current).select("svg").remove();

          // Створюємо SVG
          const svg = d3
            .select(d3Container.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

          // ----------- ФІЛЬТРИ (NORMAL / PRESSED) -----------
          const defs = svg.append("defs");

          // Зовнішня тінь (normal)
          const filterNormal = defs
            .append("filter")
            .attr("id", "filterNormal")
            .attr("x", "-50%")
            .attr("y", "-50%")
            .attr("width", "200%")
            .attr("height", "200%");
          filterNormal
            .append("feOffset")
            .attr("dx", "11")
            .attr("dy", "11")
            .attr("in", "SourceAlpha")
            .attr("result", "shadow");
          filterNormal
            .append("feGaussianBlur")
            .attr("in", "shadow")
            .attr("stdDeviation", "10")
            .attr("result", "shadowBlur");
          filterNormal.append("feMerge").call((merge) => {
            merge.append("feMergeNode").attr("in", "shadowBlur");
            merge.append("feMergeNode").attr("in", "SourceGraphic");
          });

          // Внутрішня тінь (pressed)
          const filterPressed = defs
            .append("filter")
            .attr("id", "filterPressed")
            .attr("x", "-50%")
            .attr("y", "-50%")
            .attr("width", "200%")
            .attr("height", "200%");
          filterPressed
            .append("feOffset")
            .attr("dx", "11")
            .attr("dy", "11")
            .attr("in", "SourceAlpha")
            .attr("result", "shadowInner");
          filterPressed
            .append("feGaussianBlur")
            .attr("in", "shadowInner")
            .attr("stdDeviation", "10")
            .attr("result", "shadowInnerBlur");
          filterPressed
            .append("feComposite")
            .attr("in", "SourceGraphic")
            .attr("in2", "shadowInnerBlur")
            .attr("operator", "arithmetic")
            .attr("k2", "-1")
            .attr("k3", "1")
            .attr("result", "insetShadow");
          filterPressed.append("feMerge").call((merge) => {
            merge.append("feMergeNode").attr("in", "insetShadow");
            merge.append("feMergeNode").attr("in", "SourceGraphic");
          });

          // ----------- ОТРИМУЄМО МАСИВ ВУЗЛІВ/ЗВ'ЯЗКІВ ДЛЯ FORCE LAYOUT -----------
          const { nodes, links } = collectNodesAndLinks(data);

          // d3.layout.force (v3)
          const force = d3.layout
            .force()
            .nodes(nodes)
            .links(links)
            .size([width, height])
            .charge(-1200) // відштовхування (змінюйте за потреби)
            .linkDistance(200) // відстань між вузлами (змінюйте за потреби)
            .on("tick", tick) // на кожному кроці оновлюємо позиції
            .start();

          // Група для всіх елементів (щоб можна було зумити)
          const gContainer = svg
            .append("g")
            .attr("class", "mindmap-force-container");

          // Лінії
          const link = gContainer
            .selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .style("stroke", "#1a4d45")
            .style("stroke-width", 2);

          // Вузли
          const node = gContainer
            .selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .on("click", function (d) {
              // Тогл pressed
              const rect = d3.select(this).select("rect");
              const isPressed = rect.attr("data-pressed") === "true";
              if (isPressed) {
                rect
                  .attr("data-pressed", "false")
                  .style("fill", "#ffffff")
                  .style("filter", "url(#filterNormal)");
              } else {
                rect
                  .attr("data-pressed", "true")
                  .style("fill", "#2a7c6f")
                  .style("filter", "url(#filterPressed)");
              }
            })
            .call(force.drag); // можна перетягувати вузли вручну

          // Прямокутник (квадрат) для кожного вузла
          node
            .append("rect")
            .attr("x", -40)
            .attr("y", -40)
            .attr("width", 80)
            .attr("height", 80)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("data-pressed", "false")
            .style("fill", "#ffffff")
            .style("filter", "url(#filterNormal)");

          // Текст
          node
            .append("text")
            .attr("dy", ".31em")
            .attr("text-anchor", "middle")
            .text((d) => d.label)
            .style("font", "14px 'Poppins', sans-serif")
            .style("font-weight", "bold")
            .style("fill", "#013b6e")
            .call(wrapText, 70);

          function wrapText(textSelection, width) {
            textSelection.each(function () {
              const textNode = d3.select(this);
              const words = textNode.text().split(/\s+/).reverse();
              let word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1,
                x = textNode.attr("x") || 0,
                y = textNode.attr("y") || 0,
                dy = parseFloat(textNode.attr("dy")) || 0,
                tspan = textNode
                  .text(null)
                  .append("tspan")
                  .attr("x", x)
                  .attr("y", y)
                  .attr("dy", dy + "em");

              while ((word = words.pop())) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                  line.pop();
                  tspan.text(line.join(" "));
                  line = [word];
                  tspan = textNode
                    .append("tspan")
                    .attr("x", x)
                    .attr("y", y)
                    .attr("dy", ++lineNumber * lineHeight + dy + "em")
                    .text(word);
                }
              }
            });
          }

          // Функція tick: оновлює позиції вузлів/ліній на кожному кроці
          function tick() {
            // Лінії
            link
              .attr("x1", (d) => d.source.x)
              .attr("y1", (d) => d.source.y)
              .attr("x2", (d) => d.target.x)
              .attr("y2", (d) => d.target.y);

            // Вузли (групи)
            node.attr("transform", function (d) {
              return `translate(${d.x},${d.y})`;
            });
          }

          // Коли force завершився, робимо автоцентрування
          force.on("end", () => {
            autoCenter();
          });

          // Zoom + Pan
          const zoom = d3.behavior
            .zoom()
            .scaleExtent([0.2, 5])
            .on("zoom", function () {
              gContainer.attr(
                "transform",
                `translate(${d3.event.translate}) scale(${d3.event.scale})`
              );
            });
          svg.call(zoom);

          // Функція автоцентрування
          function autoCenter() {
            const allElements = gContainer.selectAll("*");
            const bounds = getBounds(allElements);
            const centerX = bounds.x + bounds.width / 2;
            const centerY = bounds.y + bounds.height / 2;
            let initialScale = 1.0;
            let offsetX = width / 2 - initialScale * centerX;
            let offsetY = height / 2 - initialScale * centerY;
            zoom.scale(initialScale);
            zoom.translate([offsetX, offsetY]);
            zoom.event(svg);
          }

          function getBounds(selection) {
            let minX = Infinity,
              minY = Infinity,
              maxX = -Infinity,
              maxY = -Infinity;
            selection.each(function () {
              const bbox = this.getBBox();
              if (bbox.x < minX) minX = bbox.x;
              if (bbox.y < minY) minY = bbox.y;
              if (bbox.x + bbox.width > maxX) maxX = bbox.x + bbox.width;
              if (bbox.y + bbox.height > maxY) maxY = bbox.y + bbox.height;
            });
            return {
              x: minX,
              y: minY,
              width: maxX - minX,
              height: maxY - minY,
            };
          }
        }
      })
      .catch((err) => {
        console.error("Error loading D3:", err);
      });

    return () => {
      isCancelled = true;
    };
  }, [data]);

  return <div ref={d3Container} style={{ width: "100vw", height: "100vh" }} />;
};

D3MindMap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default D3MindMap;