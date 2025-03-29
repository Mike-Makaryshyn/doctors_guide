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

// Модифікована функція collectNodesAndLinks з параметром depth
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
  console.log("D3MindMap externalViewMode:", externalViewMode);

  // Якщо режим списку – повертаємо компонент спискового відображення
  if (externalViewMode === "list") {
    return (
      <div style={{ padding: "20px", overflowY: "auto", maxHeight: "100vh" }}>
        <MindMapListView data={data} />
      </div>
    );
  }

  const d3Container = useRef(null);

  useEffect(() => {
    console.log("useEffect externalViewMode:", externalViewMode);
    // Запускаємо D3-візуалізацію лише якщо режим "mindmap"
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

          // ------ Filters for Normal/Pressed States ------
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

          // ------ Створюємо дані з урахуванням глибини ------
          const { nodes, links } = collectNodesAndLinks(data, 0);

          // ------ Шкала кольорів ------
          const colorScale = d3.scale.category10();

          // ------ Force Layout Setup ------
          const force = d3.layout
            .force()
            .nodes(nodes)
            .links(links)
            .size([width, height])
            .charge(-3000)
            .linkDistance((d) => 140 + d.target.depth * 50)
            .on("tick", tick)
            .start();

          const gContainer = svg
            .append("g")
            .attr("class", "mindmap-force-container");

          // ------ Draw Links ------
          const link = gContainer
            .selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
            .style("stroke", (d) => colorScale(d.target.depth))
            .style("stroke-width", 3);

          // ------ Draw Nodes ------
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
                  .style("fill", "#2a7c6f")
                  .style("filter", "url(#filterPressed)");
              }
            })
            .call(force.drag);

          // Збільшуємо прямокутник вузла та налаштовуємо скруглення
          node
            .append("rect")
            .attr("x", -60)
            .attr("y", -50)
            .attr("width", 120)
            .attr("height", 100)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("data-pressed", "false")
            .style("fill", "#ffffff")
            .style("filter", "url(#filterNormal)");

          // Текст усередині вузла
          node
            .append("text")
            .attr("x", 0)
            .attr("dy", ".31em")
            .attr("text-anchor", "middle")
            .text((d) => d.label)
            .style("font", "14px 'Poppins', sans-serif")
            .style("font-weight", "bold")
            .style("fill", "#013b6e")
            .style("overflow-wrap", "break-word")
            .style("word-wrap", "break-word")
            .call(wrapText, 110);

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

          function tick() {
            link
              .attr("x1", (d) => d.source.x)
              .attr("y1", (d) => d.source.y)
              .attr("x2", (d) => d.target.x)
              .attr("y2", (d) => d.target.y);
            node.attr("transform", (d) => `translate(${d.x},${d.y})`);
          }

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
    overscrollBehavior: "none"
  };

  return <div ref={d3Container} style={d3ContainerStyle} />;
};

D3MindMap.propTypes = {
  data: PropTypes.object.isRequired,
  externalViewMode: PropTypes.string.isRequired,
};

export default D3MindMap;