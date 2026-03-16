import { RootNote, ChordType, CAGEDForm, GeneratedChord } from "../types";
import { generateChord, chordShapeTemplates } from "./chordGenerator";

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

const CAGED_FORMS: CAGEDForm[] = ["C", "A", "G", "E", "D"];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a random chord using the algorithm-based template system
 * Strategy: Pick form first, then a valid chord type from that form
 * This guarantees a valid combination without retries or recursion
 */
export function generateRandomChord(): GeneratedChord {
  // Pick random root note
  const rootNote = getRandomElement(ROOT_NOTES);

  // Pick random form
  const form = getRandomElement(CAGED_FORMS);

  // Convert form to template key (e.g., "E" -> "E-form")
  const formKey = `${form}-form` as const;

  // Get all available chord types for this form from the template
  const formTemplate =
    chordShapeTemplates[formKey as keyof typeof chordShapeTemplates];

  if (!formTemplate) {
    throw new Error(`Invalid form: ${formKey}`);
  }

  const availableChordTypes = Object.keys(formTemplate).filter(
    (key) => formTemplate[key as keyof typeof formTemplate] !== undefined,
  ) as ChordType[];

  // Pick random chord type from available ones
  const chordType = getRandomElement(availableChordTypes);

  // Generate the transposed chord
  const strings = generateChord(rootNote, chordType, formKey);

  return {
    rootNote,
    chordType,
    form,
    diagram: {
      form,
      strings,
      fingers: [], // TODO: generate finger positions from template
      description: `${rootNote} ${chordType} - ${form} form`,
    },
  };
}
