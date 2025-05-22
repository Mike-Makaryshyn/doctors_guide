// src/types/crosswordTypes.ts
export type Direction = 'across' | 'down';

export interface Clue {
  id: number;
  number: number;
  direction: Direction;
  text: string;
  answer: string;      // ВЕЛИКИМИ літерами, без пробілів
  row: number;         // 0-based
  col: number;         // 0-based
  description: string;
}

export interface Cell {
  row: number;
  col: number;
  isBlock: boolean;
  solution?: string;
  userInput?: string;
  acrossId?: number;
  downId?: number;
}