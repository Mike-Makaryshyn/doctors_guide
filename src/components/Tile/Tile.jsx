// src/components/Tile/Tile.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./Tile.module.scss";
import cn from "classnames";

const Tile = ({
  document,
  language,
  handleCheckboxChange,
  isCompleted,
}) => {
  const { id, name, hide, description } = document;

  const onAddToMain = () => {
    handleCheckboxChange(id.toString(), "hide");
  };

  return (
    <div
      className={cn(styles.tile, {
        [styles.tileCompleted]: isCompleted,
        [styles.tileExcluded]: hide,
      })}
    >
      <div className={styles.tileHeader}>
        <h3 className={styles.tileTitle}>{name?.[language] || "Документ"}</h3>
      </div>
      {!hide && (
        <div className={styles.tileContent}>
          {/* Додайте тут інші ключові поля, які потрібно відобразити */}
          <p className={styles.tileDescription}>
            {description?.[language] || "Опис документу"}
          </p>
        </div>
      )}
      {hide && (
        <div
          className={cn(styles.addButton, {
            [styles.addButtonHidden]: !hide,
          })}
          onClick={onAddToMain}
          title="Додати до основних документів"
        >
          +
        </div>
      )}
    </div>
  );
};

Tile.propTypes = {
  document: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default Tile;