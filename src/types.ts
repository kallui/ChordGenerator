export type RootNote = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
export type ChordType = 'Major' | 'Minor' | 'Major7' | 'Minor7' | 'Dominant7';
export type CAGEDForm = 'C' | 'A' | 'G' | 'E' | 'D';

export interface ChordDiagram {
  form: CAGEDForm;
  strings: number[]; // 0-3 fret numbers, -1 for open, x for muted
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
