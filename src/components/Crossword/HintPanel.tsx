import React from 'react';
import { Clue } from '../../types/crosswordTypes';

interface Props {
  clue: Clue | null;
  onClose: () => void;
}

const HintPanel: React.FC<Props> = ({ clue, onClose }) => (
  <div className={`cw-hint-panel ${clue ? 'open' : ''}`}>
    {clue && (
      <>
        <h3>
          Hinweis {clue.number} (
          {clue.direction === 'across' ? 'waagerecht' : 'senkrecht'})
        </h3>
        <p>{clue.description}</p>
        <button onClick={onClose}>Schließen</button>
      </>
    )}
  </div>
);

export default HintPanel;