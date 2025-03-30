import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import MindMapListView from "./MindMapListView";

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

function collectNodesAndLinks(node, depth = 0, nodes = [], links = [], parent = null) {
  node.depth = depth;
  nodes.push(node);
  if (parent) {
    links.push({ source: parent, target: node });
  }
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) =>
      collectNodesAndLinks(child, depth + 1, nodes, links, node)
    );
  }
  return { nodes, links };
}

const D3MindMap = ({ data, externalViewMode }) => {
  if (externalViewMode === "list") {
    return (
      <div style={{ padding: "20px", overflowY: "auto", maxHeight: "100vh" }}>
        <MindMapListView data={data} />
      </div>
    );
  }

  const d3Container = useRef(null);

  useEffect(() => {
    if (externalViewMode !== "mindmap") return;
    let isCancelled = false;

    loadD3()
      .then((d3) => {
        if (!isCancelled && d3Container.current && data) {
          const width = window.innerWidth;
          const height = window.innerHeight;

          d3.select(d3Container.current).select("svg").remove();

          const svg = d3
            .select(d3Container.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

          // ------ Disable double-click zoom (якщо потрібно) ------
          // svg.on("dblclick.zoom", null);

          // ------ Filters ------
          const defs = svg.append("defs");
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

          // ------ Data ------
          const { nodes, links } = collectNodesAndLinks(data, 0);
          const colorScale = d3.scale.category20();

          // ------ Force Layout Setup ------
          const force = d3.layout
            .force()
            .nodes(nodes)
            .links(links)
            .size([width, height])
            .charge(-8000) // Збільшена сила відштовхування
            .linkDistance((d) => 250 + d.target.depth * 80) // Збільшено відстань між вузлами
            .on("tick", tick);

          force.start();

          // ------ Контейнер для групування елементів ------
          const gContainer = svg
            .append("g")
            .attr("class", "mindmap-force-container");

          // ------ Малюємо лінії ------
          const link = gContainer
            .selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .style("stroke", (d) => colorScale(d.source.label))
            .style("stroke-width", 3);

          // ------ Малюємо вузли ------
          const node = gContainer
            .selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .on("click", function () {
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
                  .style("fill", "#4caf50")
                  .style("filter", "url(#filterPressed)");
              }
            });

          // Використовуємо drag – можна вимкнути, якщо "сіпання" турбує
          node.call(force.drag);

          node
            .append("rect")
            .attr("x", (d) => (d.depth === 0 ? -100 : -60))
            .attr("y", (d) => (d.depth === 0 ? -90 : -50))
            .attr("width", (d) => (d.depth === 0 ? 200 : 120))
            .attr("height", (d) => (d.depth === 0 ? 180 : 100))
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("data-pressed", "false")
            .style("fill", "#ffffff")
            .style("filter", "url(#filterNormal)");

          // ------ Текст (центрований) ------
          node
            .append("text")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .style("font", "14px 'Poppins', sans-serif")
            .style("font-weight", "bold")
            .style("fill", "#013b6e")
            .text((d) => d.label)
            .call(wrapText, 100);

          // Функція для перенесення рядків тексту
          function wrapText(textSelection, width) {
            textSelection.each(function () {
              const textNode = d3.select(this);
              const words = textNode.text().split(/\s+/).reverse();
              let word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1,
                tspan = textNode.text(null).append("tspan").attr("x", 0).attr("y", 0);
              while ((word = words.pop())) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                  line.pop();
                  tspan.text(line.join(" "));
                  line = [word];
                  tspan = textNode
                    .append("tspan")
                    .attr("x", 0)
                    .attr("y", ++lineNumber * lineHeight + "em")
                    .text(word);
                }
              }
            });
          }

          // Функція для обробки колізій (щоб вузли не накладалися)
          function collide(alpha) {
            const quadtree = d3.geom.quadtree(nodes);
            return function(d) {
              // Визначаємо радіус вузла (приблизно)
              const r = d.depth === 0 ? 100 : 60;
              const padding = 10; // відступ між вузлами
              const rb = r + padding;
              const nx1 = d.x - rb,
                    nx2 = d.x + rb,
                    ny1 = d.y - rb,
                    ny2 = d.y + rb;
              quadtree.visit(function(quad, x1, y1, x2, y2) {
                if (!quad.point || quad.point === d) return false;
                if (x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1) return false;
                let x = d.x - quad.point.x;
                let y = d.y - quad.point.y;
                let l = Math.sqrt(x * x + y * y);
                const r2 = quad.point.depth === 0 ? 100 : 60;
                const rSum = r + r2 + padding;
                if (l < rSum) {
                  l = (l - rSum) / l * alpha;
                  x *= l;
                  y *= l;
                  d.x -= x;
                  d.y -= y;
                  quad.point.x += x;
                  quad.point.y += y;
                }
                return false;
              });
            };
          }

          // Функція tick для оновлення позицій
          function tick(e) {
            // Оновлюємо позиції ліній
            link
              .attr("x1", (d) => d.source.x)
              .attr("y1", (d) => d.source.y)
              .attr("x2", (d) => d.target.x)
              .attr("y2", (d) => d.target.y);
            // Викликаємо колізії
            node.each(collide(e.alpha));
            // Оновлюємо позиції вузлів
            node.attr("transform", (d) => `translate(${d.x},${d.y})`);
          }

          // ------ Налаштування масштабування ------
          const zoom = d3.behavior
            .zoom()
            .scaleExtent([0.2, 5]) // Тепер можна віддаляти далі
            .on("zoom", function () {
              gContainer.attr(
                "transform",
                `translate(${d3.event.translate}) scale(${d3.event.scale})`
              );
            });

          svg.call(zoom);
        }
      })
      .catch((err) => {
        console.error("Error loading D3:", err);
      });

    return () => {
      isCancelled = true;
    };
  }, [data, externalViewMode]);

  const d3ContainerStyle = {
    width: "100vw",
    height: "100vh",
    overscrollBehavior: "none",
  };

  return <div ref={d3Container} style={d3ContainerStyle} />;
};

D3MindMap.propTypes = {
  data: PropTypes.object.isRequired,
  externalViewMode: PropTypes.string.isRequired,
};

export default D3MindMap;