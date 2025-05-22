import React, { ChangeEvent } from 'react';
import { Cell } from '../../types/crosswordTypes';

interface Props {
  cell: Cell;
  selected: boolean;
  onChange: (val: string) => void;
}

const CrosswordCell: React.FC<Props> = ({ cell, selected, onChange }) => {
  if (cell.isBlock) return <div className="cw-cell cw-block" />;

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().slice(-1); // остання введена літера
    onChange(value);
  };

  return (
    <div className={`cw-cell ${selected ? 'cw-selected' : ''}`}>
      <input
        type="text"
        maxLength={1}
        value={cell.userInput ?? ''}
        onChange={handle}
        aria-label="Buchstabe im Kreuzworträtsel"
        title="Buchstabe eingeben"
        placeholder=" "
      />
    </div>
  );
};

export default CrosswordCell;