// src/utils/buildGrid.ts
import { Cell, Clue } from '../types/crosswordTypes';

export const buildGridFromClues = (
  clues: Clue[],
  rows: number,
  cols: number,
): Cell[][] => {
  // створюємо повністю «чорну» решітку
  const grid: Cell[][] = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      row: r,
      col: c,
      isBlock: true,
    })),
  );

  // розміщуємо всі слова
  clues.forEach(({ id, row, col, answer, direction }) => {
    answer.split('').forEach((ch, i) => {
      const r = row + (direction === 'down' ? i : 0);
      const c = col + (direction === 'across' ? i : 0);
      const cell = grid[r][c];

      if (!cell.isBlock && cell.solution !== ch) {
        throw new Error(`Konflikt bei ${r}/${c}: ${cell.solution} ≠ ${ch}`);
      }
      cell.isBlock = false;
      cell.solution = ch;
      if (direction === 'across') cell.acrossId = id;
      if (direction === 'down') cell.downId = id;
    });
  });

  return grid;
};