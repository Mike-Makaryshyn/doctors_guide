import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './MindMapListView.module.scss';

const ArrowIcon = ({ isCollapsed }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isCollapsed ? (
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

const getInitialCollapsed = (node, isRoot = true) => {
  let result = {};
  // Якщо вузол має дітей
  if (node.children && node.children.length > 0) {
    // для кореневого вузла ставимо false, щоб він був розгорнутим
    // для всіх інших — true
    result[node.id] = !isRoot;

    // Рекурсивно обходимо дітей
    node.children.forEach((child) => {
      result = { ...result, ...getInitialCollapsed(child, false) };
    });
  }
  return result;
};

const MindMapListView = ({ data }) => {
  const [pressedNodes, setPressedNodes] = useState({});
  const [collapsedNodes, setCollapsedNodes] = useState(() => getInitialCollapsed(data));

  useEffect(() => {
    setCollapsedNodes(getInitialCollapsed(data));
  }, [data]);

  const togglePressed = (id) => {
    setPressedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCollapse = (id) => {
    setCollapsedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
                  <ArrowIcon isCollapsed={collapsedNodes[node.id]} />
                </span>
              )}
            </div>
          </div>

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