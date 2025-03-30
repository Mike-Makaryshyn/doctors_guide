import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './MindMapListView.module.scss';

const MindMapListView = ({ data }) => {
  const [pressedNodes, setPressedNodes] = useState({});

  const togglePressed = (id) => {
    setPressedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderList = (node, index, siblings) => {
    const isLastItem = index === siblings.length - 1;

    return (
      <li
        key={node.id}
        className={classNames(styles.listItem, {
          [styles.lastItem]: isLastItem,
        })}
      >
        {/* Основний контейнер для плитки */}
        <div className={styles.nodeContainer}>
          <div className={styles.tileWrapper}>
            <div
              className={classNames(styles.tile, {
                [styles.tilePressed]: pressedNodes[node.id],
              })}
              onClick={() => togglePressed(node.id)}
            >
              {node.label}
            </div>
          </div>

          {/* Якщо є діти — обгортаємо їх у childrenContainer */}
          {node.children && node.children.length > 0 && (
            <div className={styles.childrenContainer}>
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