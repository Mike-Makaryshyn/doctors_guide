import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MindMapListView.module.scss';

const MindMapListView = ({ data }) => {
  // Стан для відстеження «натиснутих» плиток за їхнім ID
  const [pressedNodes, setPressedNodes] = useState({});

  // Функція для перемикання стану конкретного вузла
  const togglePressed = (id) => {
    setPressedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Рекурсивна функція, яка відображає поточний вузол і його дітей
  const renderList = (node) => (
    <li key={node.id} className={styles.listItem}>
      <div
        className={`${styles.tile} ${
          pressedNodes[node.id] ? styles.tilePressed : ''
        }`}
        onClick={() => togglePressed(node.id)}
      >
        {node.label}
      </div>
      {node.children && node.children.length > 0 && (
        <ul className={styles.nestedList}>
          {node.children.map((child) => renderList(child))}
        </ul>
      )}
    </li>
  );

  return (
    <div className={styles.container}>
      <ul className={styles.rootList}>
        {renderList(data)}
      </ul>
    </div>
  );
};

MindMapListView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MindMapListView;