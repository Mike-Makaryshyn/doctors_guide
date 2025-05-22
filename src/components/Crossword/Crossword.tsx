import React, { useState } from 'react';
import {
  clues,
  GRID_ROWS,
  GRID_COLS,
} from '../../data/abdomenCrossword';
import { buildGridFromClues } from '../../utils/buildGrid';
import { Cell } from '../../types/crosswordTypes';
import CrosswordCell from './CrosswordCell';
import ClueList from './ClueList';
import HintPanel from './HintPanel';
import './crossword.css';

const Crossword: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>(() =>
    buildGridFromClues(clues, GRID_ROWS, GRID_COLS),
  );
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const updateCell = (r: number, c: number, val: string) => {
    setGrid((old) =>
      old.map((row, ri) =>
        row.map((cell, ci) =>
          ri === r && ci === c ? { ...cell, userInput: val } : cell,
        ),
      ),
    );
  };

  const revealLetter = (id: number) => {
    setGrid((old) =>
      old.map((row) =>
        row.map((cell) =>
          (cell.acrossId === id || cell.downId === id) &&
          (!cell.userInput || cell.userInput === '')
            ? { ...cell, userInput: cell.solution }
            : cell,
        ),
      ),
    );
  };

  const revealWord = (id: number) => {
    setGrid((old) =>
      old.map((row) =>
        row.map((cell) =>
          cell.acrossId === id || cell.downId === id
            ? { ...cell, userInput: cell.solution }
            : cell,
        ),
      ),
    );
  };

  return (
    <div className="cw-wrapper">
      <div className={`cw-grid cw-grid-${GRID_COLS}x${GRID_ROWS}`}>
        {grid.map((row, ri) =>
          row.map((cell, ci) => (
            <CrosswordCell
              key={`${ri}-${ci}`}
              cell={cell}
              selected={
                selectedId !== null &&
                (cell.acrossId === selectedId || cell.downId === selectedId)
              }
              onChange={(val) => updateCell(ri, ci, val)}
            />
          )),
        )}
      </div>

      <ClueList
        clues={clues.filter((c) => c.direction === 'across')}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onRevealLetter={revealLetter}
        onRevealWord={revealWord}
      />
      <ClueList
        clues={clues.filter((c) => c.direction === 'down')}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onRevealLetter={revealLetter}
        onRevealWord={revealWord}
      />

      <HintPanel
        clue={clues.find((c) => c.id === selectedId) ?? null}
        onClose={() => setSelectedId(null)}
      />
    </div>
  );
};

export default Crossword;