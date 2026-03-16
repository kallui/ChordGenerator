import { RootNote, ChordType, CAGEDForm, GeneratedChord } from "../types";
import { chordDatabase } from "../data/chords";

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

export function generateRandomChord(): GeneratedChord {
  const rootNote = getRandomElement(ROOT_NOTES);
  const chordType = getRandomElement(CHORD_TYPES);
  const form = getRandomElement(CAGED_FORMS);

  // Find the chord in the database
  const chordKey = `${rootNote}-${chordType}`;
  const chordData = chordDatabase[chordKey as keyof typeof chordDatabase];

  if (!chordData) {
    // Fallback if chord not found
    return generateRandomChord();
  }

  // Find diagram for the selected form
  const diagram = chordData.diagrams.find((d) => d.form === form);

  if (!diagram) {
    // If form not available, pick available form
    const availableDiagram = chordData.diagrams[0];
    return {
      rootNote,
      chordType,
      form: availableDiagram.form,
      diagram: availableDiagram,
    };
  }

  return {
    rootNote,
    chordType,
    form,
    diagram,
  };
}
