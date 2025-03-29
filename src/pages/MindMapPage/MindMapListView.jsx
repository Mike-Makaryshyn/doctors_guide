import React from 'react';
import PropTypes from 'prop-types';

// Utility function to flatten the tree structure
const flattenTree = (node, level = 0) => {
  let items = [{ id: node.id, label: node.label, level }];
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      items = items.concat(flattenTree(child, level + 1));
    });
  }
  return items;
};

const MindMapListView = ({ data }) => {
  const items = flattenTree(data);

  return (
    <div style={{ padding: '10px', overflowY: 'auto', maxHeight: '100vh' }}>
      {items.map(item => (
        <div key={item.id} style={{ paddingLeft: item.level * 20, margin: '4px 0' }}>
          <span style={{ fontWeight: 'bold' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

MindMapListView.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MindMapListView;