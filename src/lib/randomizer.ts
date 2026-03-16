import { RootNote, ChordType, CAGEDForm, GeneratedChord } from "../types";
import { generateChord } from "./chordGenerator";

const ROOT_NOTES: RootNote[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

// Note: these may differ based on which forms have which chord types
// Update as needed when chord templates are finalized
const CHORD_TYPES: ChordType[] = [
  "Major",
  "Minor",
  "Major7",
  "Minor7",
  "Dominant7",
];

const CAGED_FORMS: CAGEDForm[] = ["C", "A", "G", "E", "D"];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a random chord using the algorithm-based template system
 * Transposition is handled automatically by the generateChord function
 */
export function generateRandomChord(): GeneratedChord {
  let rootNote: RootNote;
  let chordType: ChordType;
  let form: CAGEDForm;
  let strings: (number | null)[];

  // Keep trying until we find a valid combination
  // (some form/chord combinations may not exist)
  let maxAttempts = 50;
  while (maxAttempts > 0) {
    rootNote = getRandomElement(ROOT_NOTES);
    chordType = getRandomElement(CHORD_TYPES);
    form = getRandomElement(CAGED_FORMS);

    try {
      // Generate the transposed chord
      strings = generateChord(rootNote, chordType, form);
      break; // Success, exit loop
    } catch (error) {
      maxAttempts--;
      if (maxAttempts === 0) {
        // Fallback: try again from scratch
        return generateRandomChord();
      }
    }
  }

  return {
    rootNote,
    chordType,
    form,
    diagram: {
      form,
      strings: strings as number[],
      fingers: [], // TODO: generate finger positions from template
      description: `${rootNote} ${chordType} - ${form} form`,
    },
  };
}
