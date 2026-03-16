// Guitar string order: E (low), A, D, G, B, E (high)
// -1 = open string (○) - never transposed
// 0 = muted/don't play (✕) - never transposed
// 1+ = fret numbers - transposed by adding root note offset

//TODO ADD Chord shape altneratives (e.g. E Min7 in E form)
export const chordShapeTemplates = {
  "E-form": {
    Major: [0, 2, 2, 1, 0, 0],
    Minor: [0, 2, 2, 0, 0, 0],
    "7": [0, 2, 0, 1, 0, 0], // add alternative form
    Min7: [0, 2, 0, 0, 0, 0], // add alternative
    Maj7: [1, null, 2, 2, 1, 0],
    Power5: [1, 3, 3, null, null, null],
  },

  "A-form": {
    Major: [null, 0, 2, 2, 2, 0],
    Minor: [null, 0, 2, 2, 1, 0],
    "7": [null, 0, 2, 0, 2, 0], // add alt
    Min7: [null, 0, 2, 0, 1, 0], // add alt
    Maj7: [null, 0, 2, 1, 2, 0],
    Power5: [null, 1, 3, 3, null, null],
  },

  "D-form": {
    Major: [null, null, 0, 2, 3, 2],
    Minor: [null, null, 0, 2, 3, 1],
    "7": [null, null, 0, 2, 1, 2],
    Min7: [null, null, 0, 2, 1, 1],
    Maj7: [null, null, 0, 2, 2, 2],
    Power5: [null, null, 1, 3, 4, 0], // ada curve dibawahnya mkksdnya apa
  },

  "C-form": {
    Major: [null, 3, 2, 0, 1, 0],
    Minor: [null, 3, 1, 0, 1, 0],
    "7": [null, 3, 2, 3, 1, 0],
    Min7: [null, 3, 1, 3, 1, 0], // check cus theres bar chord or sum
    Maj7: [null, 3, 2, 0, 0, 0],
    // Power5: not available in C-form (check chart)
  },

  "G-form": {
    Major: [3, 2, 0, 0, 0, 3], // add alt
    Minor: [3, 1, 0, 0, 0, 0],
    "7": [3, 2, 0, 0, 0, 1],
    Min7: [3, 1, 3, 0, 0, 0],
    Maj7: [3, 2, 0, 0, 0, 2],
    Power5: [0, 0, 0, 1, 3, 3],
  },
};

// Semitone offsets from C (for transposition)
export const noteOffsets: Record<string, number> = {
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
  A: 9,
  "A#": 10,
  B: 11,
};

// Generator function: transpose a shape template to a specific root note
export function generateChord(
  rootNote: string,
  chordType: string,
  form: string,
): number[] {
  const template =
    chordShapeTemplates[form as keyof typeof chordShapeTemplates];
  if (!template) throw new Error(`Unknown form: ${form}`);

  const chordTemplate = template[chordType as keyof typeof template];
  if (!chordTemplate) throw new Error(`Unknown chord type: ${chordType}`);

  const offset = noteOffsets[rootNote];
  if (offset === undefined) throw new Error(`Unknown root note: ${rootNote}`);

  // Transpose: add fret offset to fretted notes only
  // Keep -1 (open) and 0 (muted) unchanged
  return chordTemplate.map((fret) => {
    if (fret < 1) return fret; // Don't transpose open or muted
    return fret + offset; // Only transpose fret numbers
  });
}
