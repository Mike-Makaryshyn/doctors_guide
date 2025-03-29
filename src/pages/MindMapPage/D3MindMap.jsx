import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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

function collectNodesAndLinks(node, nodes = [], links = [], parent = null) {
  nodes.push(node);
  if (parent) {
    links.push({ source: parent, target: node });
  }
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

          // ------ Force Layout Setup ------
          const { nodes, links } = collectNodesAndLinks(data);
          const force = d3.layout
            .force()
            .nodes(nodes)
            .links(links)
            .size([width, height])
            .charge(-3000)       // ще сильніше відштовхування
            .linkDistance(500)   // збільшена відстань між вузлами
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
            .style("stroke", "#1a4d45")
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

          // Make nodes larger (100x100) and with less rounded corners (rx,ry=20)
          node
            .append("rect")
            .attr("x", -50)
            .attr("y", -50)
            .attr("width", 100)
            .attr("height", 100)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("data-pressed", "false")
            .style("fill", "#ffffff")
            .style("filter", "url(#filterNormal)");

          // Text: Bold, using Poppins, color #013b6e, wrap inside 90px width, centered
          node
            .append("text")
            .attr("x", 0) // додано для центрування тексту всередині вузла
            .attr("dy", ".31em")
            .attr("text-anchor", "middle")
            .text((d) => d.label)
            .style("font", "14px 'Poppins', sans-serif")
            .style("font-weight", "bold")
            .style("fill", "#013b6e")
            .call(wrapText, 90);

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

          // Виключаємо автоцентр (autoCenter) після завершення розташування, щоб не відбувалося раптове зближення
          // force.on("end", autoCenter); // закоментовано, щоб користувач міг сам керувати зумом

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
            return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
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