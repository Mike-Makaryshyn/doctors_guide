import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './MindMapListView.module.scss';

const MindMapListView = ({ data }) => {
  const [pressedNodes, setPressedNodes] = useState({});
  const [collapsedNodes, setCollapsedNodes] = useState({});

  const togglePressed = (id) => {
    setPressedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCollapse = (id) => {
    setCollapsedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  /**
   * Рекурсивно рендеримо вузли списку.
   * @param {Object} node - поточний вузол
   * @param {number} index - індекс вузла серед "братів"
   * @param {Array} siblings - масив "братів" поточного вузла
   * @returns {JSX.Element}
   */
  const renderList = (node, index, siblings) => {
    const isLastItem = (index === siblings.length - 1);

    return (
      <li
        key={node.id}
        className={classNames(styles.listItem, {
          [styles.lastItem]: isLastItem,
        })}
      >
        <div className={styles.nodeContainer}>
          <div className={styles.tileWrapper}>
            <div
              className={classNames(styles.tile, {
                [styles.tilePressed]: pressedNodes[node.id],
              })}
              onClick={() => togglePressed(node.id)}
            >
              {node.label}

              {node.children && node.children.length > 0 && (
                <span
                  className={styles.arrow}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCollapse(node.id);
                  }}
                >
                  {collapsedNodes[node.id] ? '▶' : '▼'}
                </span>
              )}
            </div>
          </div>

          {/* Рендеримо дітей завжди, а видимість контролюємо через CSS-класи collapsed/expanded */}
          {node.children && node.children.length > 0 && (
            <div
              className={classNames(
                styles.childrenContainer,
                collapsedNodes[node.id] ? styles.collapsed : styles.expanded
              )}
            >
              <ul className={styles.nestedList}>
                {node.children.map((child, i) => renderList(child, i, node.children))}
              </ul>
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className={styles.container}>
      <ul className={styles.rootList}>
        {renderList(data, 0, [data])}
      </ul>
    </div>
  );
};

MindMapListView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MindMapListView;