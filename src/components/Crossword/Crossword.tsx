import React, { useState } from 'react';
import {
  clues,
  GRID_ROWS,
  GRID_COLS,
} from '../../data/abdomenCrossword';
import { buildGridFromClues } from '../../utils/buildGrid';
import { Cell } from '../../types/crosswordTypes';
import CrosswordCell from './CrosswordCell';
import './crossword.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Dynamische Zellgröße je nach Viewport
const BASE = window.matchMedia('(max-width:480px)').matches ? 25 : 35;
const CELL = BASE + 2;          // 2 px Gap

const starts = new Map<string, { number: number; text: string }>();
clues.forEach((c) => {
  starts.set(`${c.row}-${c.col}`, { number: c.number, text: c.text });
});

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
    <div className="cw-wrapper" style={{ position: 'relative' }}>
      <div className={`cw-grid cw-grid-${GRID_COLS}x${GRID_ROWS}`}>
        {grid.map((row, ri) =>
          row.map((cell, ci) => {
            const start = starts.get(`${ri}-${ci}`);
            return (
              <CrosswordCell
                key={`${ri}-${ci}`}
                cell={cell}
                selected={
                  selectedId !== null &&
                  (cell.acrossId === selectedId || cell.downId === selectedId)
                }
                onChange={(val) => updateCell(ri, ci, val)}
              />
            );
          }),
        )}
      </div>

      {/* Hint‑Buttons direkt vor der ersten Zelle */}
      {clues.map((clue) => {
        const top = clue.row * CELL;
        const left = clue.col * CELL;
        const cls = clue.direction === 'across' ? 'cw-hint-left' : 'cw-hint-top';

        return (
          <Tippy
            key={clue.id}
            content={clue.description}
            placement="top"
            theme="dark"
            delay={[100, 0]}
            arrow={true}
            trigger="click"
          >
            <button
              className={`cw-inline-hint ${cls}`}
              style={{ top, left }}
              onClick={() => setSelectedId(clue.id)}
            >
              {clue.number}
            </button>
          </Tippy>
        );
      })}
    </div>
  );
};

export default Crossword;