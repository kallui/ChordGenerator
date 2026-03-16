export type RootNote =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";
export type ChordType =
  | "Major"
  | "Minor"
  | "7"
  | "Min7"
  | "Maj7"
  | "Power5"
  | "Major7"
  | "Minor7"
  | "Dominant7";
export type CAGEDForm = "C" | "A" | "G" | "E" | "D";

export interface ChordDiagram {
  form: CAGEDForm;
  strings: (number | null)[]; // null = muted, numbers are fret positions
  fingers: string[]; // Finger positions (T, I, M, R, P)
  description: string;
}

export interface ChordData {
  rootNote: RootNote;
  chordType: ChordType;
  diagrams: ChordDiagram[];
}

export interface GeneratedChord {
  rootNote: RootNote;
  chordType: ChordType;
  form: CAGEDForm;
  diagram: ChordDiagram;
}

export interface AppState {
  currentChord: GeneratedChord | null;
  showAnswer: boolean;
}
