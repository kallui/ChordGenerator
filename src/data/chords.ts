import { ChordData } from '../types';

// Guitar string notes (low to high): E A D G B E
// Fret numbers represent positions on the fretboard
// -1 = open string (play it)
// 0 = first fret
// x = muted/don't play

export const chordDatabase: Record<string, ChordData> = {
  // C Major shapes
  'C-Major': {
    rootNote: 'C',
    chordType: 'Major',
    diagrams: [
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 0], // E A D G B E strings
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'C Major - C form (Open position)',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I/M/R', 'I/M/R', 'I/M/R', '-'],
        description: 'C Major - A form (3rd fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'C Major - G form (3rd fret)',
      },
      {
        form: 'E',
        strings: [0, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'C Major - E form (8th fret)',
      },
      {
        form: 'D',
        strings: [-1, 3, 2, 0, 1, 0],
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'C Major - D form (5th fret)',
      },
    ],
  },
  // C Minor shapes
  'C-Minor': {
    rootNote: 'C',
    chordType: 'Minor',
    diagrams: [
      {
        form: 'C',
        strings: [-1, 3, 1, 0, 1, 0],
        fingers: ['-', 'R', 'I', '-', 'M', '-'],
        description: 'C Minor - C form',
      },
      {
        form: 'A',
        strings: [-1, 0, 1, 2, 1, 0],
        fingers: ['-', '-', 'I', 'R', 'M', '-'],
        description: 'C Minor - A form (3rd fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 1, 0, 0, 3],
        fingers: ['R', 'R', 'I', '-', '-', 'R'],
        description: 'C Minor - G form (3rd fret)',
      },
      {
        form: 'E',
        strings: [0, 0, 1, 2, 1, 0],
        fingers: ['-', '-', 'I', 'R', 'M', '-'],
        description: 'C Minor - E form (8th fret)',
      },
      {
        form: 'D',
        strings: [-1, 3, 1, 0, 1, 0],
        fingers: ['-', 'R', 'I', '-', 'M', '-'],
        description: 'C Minor - D form',
      },
    ],
  },
  // C Major7 shapes
  'C-Major7': {
    rootNote: 'C',
    chordType: 'Major7',
    diagrams: [
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 0, 0],
        fingers: ['-', 'R', 'M', '-', '-', '-'],
        description: 'C Major7 - C form',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 1, 0],
        fingers: ['-', '-', 'M', 'R', 'I', '-'],
        description: 'C Major7 - A form (3rd fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 2],
        fingers: ['R', 'R', '-', '-', '-', 'I'],
        description: 'C Major7 - G form (3rd fret)',
      },
      {
        form: 'E',
        strings: [0, 0, 2, 1, 2, 0],
        fingers: ['-', '-', 'R', 'I', 'M', '-'],
        description: 'C Major7 - E form',
      },
      {
        form: 'D',
        strings: [-1, 3, 2, 0, 0, 0],
        fingers: ['-', 'R', 'M', '-', '-', '-'],
        description: 'C Major7 - D form',
      },
    ],
  },
  // C Minor7 shapes
  'C-Minor7': {
    rootNote: 'C',
    chordType: 'Minor7',
    diagrams: [
      {
        form: 'C',
        strings: [-1, 3, 1, 0, 1, 1],
        fingers: ['-', 'R', 'I', '-', 'M', 'M'],
        description: 'C Minor7 - C form',
      },
      {
        form: 'A',
        strings: [-1, 0, 1, 2, 1, 1],
        fingers: ['-', '-', 'I', 'R', 'M', 'M'],
        description: 'C Minor7 - A form (3rd fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 1, 0, 0, 1],
        fingers: ['R', 'R', 'I', '-', '-', 'M'],
        description: 'C Minor7 - G form (3rd fret)',
      },
      {
        form: 'E',
        strings: [0, 0, 1, 2, 1, 1],
        fingers: ['-', '-', 'I', 'R', 'M', 'M'],
        description: 'C Minor7 - E form',
      },
      {
        form: 'D',
        strings: [-1, 3, 1, 0, 1, 1],
        fingers: ['-', 'R', 'I', '-', 'M', 'M'],
        description: 'C Minor7 - D form',
      },
    ],
  },
  // C Dominant7 shapes
  'C-Dominant7': {
    rootNote: 'C',
    chordType: 'Dominant7',
    diagrams: [
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 1],
        fingers: ['-', 'R', 'M', '-', 'I', 'M'],
        description: 'C Dominant7 - C form',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 1],
        fingers: ['-', '-', 'M', 'R', 'M', 'I'],
        description: 'C Dominant7 - A form (3rd fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 1],
        fingers: ['R', 'R', '-', '-', '-', 'I'],
        description: 'C Dominant7 - G form (3rd fret)',
      },
      {
        form: 'E',
        strings: [0, 0, 2, 2, 2, 1],
        fingers: ['-', '-', 'M', 'R', 'M', 'I'],
        description: 'C Dominant7 - E form',
      },
      {
        form: 'D',
        strings: [-1, 3, 2, 0, 1, 1],
        fingers: ['-', 'R', 'M', '-', 'I', 'M'],
        description: 'C Dominant7 - D form',
      },
    ],
  },
  // G Major shapes
  'G-Major': {
    rootNote: 'G',
    chordType: 'Major',
    diagrams: [
      {
        form: 'G',
        strings: [3, 2, 0, 0, 3, 3],
        fingers: ['R', 'I', '-', '-', 'M', 'M'],
        description: 'G Major - G form (Open)',
      },
      {
        form: 'A',
        strings: [-1, 10, 9, 7, 8, 7],
        fingers: ['-', 'R', 'I', '-', 'M', 'I'],
        description: 'G Major - A form (10th fret)',
      },
      {
        form: 'E',
        strings: [0, 2, 2, 1, 0, 0],
        fingers: ['-', 'M', 'R', 'I', '-', '-'],
        description: 'G Major - E form (3rd fret)',
      },
      {
        form: 'D',
        strings: [-1, 5, 4, 5, 5, 5],
        fingers: ['-', 'M', 'I', 'R', 'R', 'R'],
        description: 'G Major - D form (5th fret)',
      },
      {
        form: 'C',
        strings: [3, 2, 0, 0, 3, 3],
        fingers: ['R', 'I', '-', '-', 'M', 'M'],
        description: 'G Major - C form (5th fret)',
      },
    ],
  },
  // A Major shapes
  'A-Major': {
    rootNote: 'A',
    chordType: 'Major',
    diagrams: [
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'A Major - A form (Open)',
      },
      {
        form: 'E',
        strings: [0, 2, 2, 1, 0, 0],
        fingers: ['-', 'M', 'R', 'I', '-', '-'],
        description: 'A Major - E form (5th fret)',
      },
      {
        form: 'D',
        strings: [-1, 5, 4, 5, 5, 5],
        fingers: ['-', 'R', 'I', 'R', 'R', 'R'],
        description: 'A Major - D form (7th fret)',
      },
      {
        form: 'C',
        strings: [3, 2, 0, 0, 3, 3],
        fingers: ['R', 'I', '-', '-', 'M', 'M'],
        description: 'A Major - C form (10th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'A Major - G form (12th fret)',
      },
    ],
  },
  // A Minor shapes
  'A-Minor': {
    rootNote: 'A',
    chordType: 'Minor',
    diagrams: [
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 1, 0],
        fingers: ['-', '-', 'M', 'R', 'I', '-'],
        description: 'A Minor - A form (Open)',
      },
      {
        form: 'E',
        strings: [0, 2, 2, 0, 0, 0],
        fingers: ['-', 'M', 'R', '-', '-', '-'],
        description: 'A Minor - E form (5th fret)',
      },
      {
        form: 'D',
        strings: [-1, 5, 3, 5, 5, 4],
        fingers: ['-', 'R', 'I', 'M', 'M', 'I'],
        description: 'A Minor - D form (7th fret)',
      },
      {
        form: 'C',
        strings: [3, 2, 1, 0, 1, 0],
        fingers: ['R', 'M', 'I', '-', 'I', '-'],
        description: 'A Minor - C form (10th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 1, 0, 0, 1],
        fingers: ['R', 'R', 'I', '-', '-', 'M'],
        description: 'A Minor - G form (12th fret)',
      },
    ],
  },
  // D Major shapes
  'D-Major': {
    rootNote: 'D',
    chordType: 'Major',
    diagrams: [
      {
        form: 'D',
        strings: [-1, -1, 0, 2, 3, 2],
        fingers: ['-', '-', '-', 'I', 'R', 'M'],
        description: 'D Major - D form (Open)',
      },
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 0],
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'D Major - C form (5th fret)',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'D Major - A form (7th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'D Major - G form (10th fret)',
      },
      {
        form: 'E',
        strings: [0, 2, 2, 1, 0, 0],
        fingers: ['-', 'M', 'R', 'I', '-', '-'],
        description: 'D Major - E form (12th fret)',
      },
    ],
  },
  // E Major shapes
  'E-Major': {
    rootNote: 'E',
    chordType: 'Major',
    diagrams: [
      {
        form: 'E',
        strings: [0, 2, 2, 1, 0, 0],
        fingers: ['-', 'M', 'R', 'I', '-', '-'],
        description: 'E Major - E form (Open)',
      },
      {
        form: 'D',
        strings: [-1, -1, 0, 2, 3, 2],
        fingers: ['-', '-', '-', 'I', 'R', 'M'],
        description: 'E Major - D form (7th fret)',
      },
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 0],
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'E Major - C form (12th fret)',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'E Major - A form (12th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'E Major - G form',
      },
    ],
  },
  // F Major shapes
  'F-Major': {
    rootNote: 'F',
    chordType: 'Major',
    diagrams: [
      {
        form: 'E',
        strings: [1, 3, 3, 2, 1, 1],
        fingers: ['I', 'R', 'R', 'M', 'I', 'I'],
        description: 'F Major - E form (1st fret barre)',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'F Major - A form (8th fret)',
      },
      {
        form: 'D',
        strings: [-1, -1, 0, 2, 3, 2],
        fingers: ['-', '-', '-', 'I', 'R', 'M'],
        description: 'F Major - D form (10th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'F Major - G form (13th fret)',
      },
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 0],
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'F Major - C form',
      },
    ],
  },
  // B Major shapes
  'B-Major': {
    rootNote: 'B',
    chordType: 'Major',
    diagrams: [
      {
        form: 'E',
        strings: [2, 4, 4, 3, 2, 2],
        fingers: ['I', 'R', 'R', 'M', 'I', 'I'],
        description: 'B Major - E form (2nd fret barre)',
      },
      {
        form: 'A',
        strings: [-1, 0, 2, 2, 2, 0],
        fingers: ['-', '-', 'I', 'M', 'R', '-'],
        description: 'B Major - A form (11th fret)',
      },
      {
        form: 'D',
        strings: [-1, -1, 0, 2, 3, 2],
        fingers: ['-', '-', '-', 'I', 'R', 'M'],
        description: 'B Major - D form (7th fret)',
      },
      {
        form: 'G',
        strings: [3, 3, 0, 0, 0, 3],
        fingers: ['R', 'R', '-', '-', '-', 'R'],
        description: 'B Major - G form (7th fret)',
      },
      {
        form: 'C',
        strings: [-1, 3, 2, 0, 1, 0],
        fingers: ['-', 'R', 'M', '-', 'I', '-'],
        description: 'B Major - C form (2nd fret)',
      },
    ],
  },
};
