// src/data/abdomenCrossword.ts
import { Clue } from '../types/crosswordTypes';

/**
 * Сітка 13 × 21 (ряди × колонки)
 * Координати підібрані під твій слайд «Akutes Abdomen».
 * За потреби просто змінюй row/col або додавай нові об’єкти.
 */
export const clues: Clue[] = [
  {
    id: 1,
    number: 1,
    direction: 'down',
    text: 'Rechtsseitiger UB-Schmerz, Abwehrspannung, Loslassschmerz',
    answer: 'APPENDIZITIS',
    row: 0,
    col: 8,
    description:
      'Häufigste Ursache des „akuten Abdomens“ bei jungen Patient*innen.',
  },
  {
    id: 2,
    number: 2,
    direction: 'across',
    text: 'Totenstille, symptomarmes Intervall, ↑ Laktat',
    answer: 'MESENTERIALISCHÄMIE',
    row: 3,
    col: 2,
    description:
      'durch Embolus oder Thrombose der A. mesenterica.',
  },
  {
    id: 3,
    number: 3,
    direction: 'down',
    text: 'Stuhlverhalt + Spiegel + Miserere',
    answer: 'ILEUS',
    row: 3,
    col: 10,
    description: 'Mechanischer oder paralytischer Darmverschluss – OP-Indikation!',
  },
  {
    id: 4,
    number: 4,
    direction: 'across',
    text: 'Murphy-Zeichen positiv',
    answer: 'CHOLEZYSTITIS',
    row: 7,
    col: 3,
    description: 'Entzündung der Gallenblase – häufig biliäre Steine.',
  },
  {
    id: 5,
    number: 5,
    direction: 'across',
    text: 'Freie Luft unter dem Zwerchfell',
    answer: 'PERFORATION',
    row: 10,
    col: 0,
    description:
      '(Ulcus, Divertikulitis u. a.) – chirurgischer Notfall.',
  },
];

// ✓ Розміри решітки потрібні компоненту
export const GRID_ROWS = 13;
export const GRID_COLS = 21;