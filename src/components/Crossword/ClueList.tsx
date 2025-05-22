import React from 'react';
import { Clue } from '../../types/crosswordTypes';

interface Props {
  clues: Clue[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  onRevealLetter: (id: number) => void;
  onRevealWord: (id: number) => void;
}

const ClueList: React.FC<Props> = ({
  clues,
  selectedId,
  onSelect,
  onRevealLetter,
  onRevealWord,
}) => (
  <div className="cw-clue-list">
    {clues.map((clue) => (
      <div
        key={clue.id}
        className={`cw-clue ${selectedId === clue.id ? 'cw-clue-active' : ''}`}
      >
        <div
          className="cw-hint-box"
          onClick={() => onSelect(clue.id)}
          title="Beschreibung anzeigen"
        >
          {clue.number}
          <i className="cw-arrow" />
        </div>
        <span className="cw-clue-text">{clue.text}</span>
        <button onClick={() => onRevealLetter(clue.id)}>Buchstabe zeigen</button>
        <button onClick={() => onRevealWord(clue.id)}>Wort zeigen</button>
      </div>
    ))}
  </div>
);

export default ClueList;