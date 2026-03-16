import React from "react";
import { ChordDiagram as ChordDiagramType } from "../types";

interface ChordDiagramProps {
  diagram: ChordDiagramType;
  form: string;
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({
  diagram,
  form,
}) => {
  const strings = diagram.strings;
  const stringNotes = ["E", "A", "D", "G", "B", "E"]; // Low to high

  // Calculate which fret to display as the first fret shown
  const maxFret = Math.max(...strings.filter((f) => f > 0), 4);
  const startFret = Math.max(1, Math.floor((maxFret - 3) / 2) * 2);

  return (
    <div className="flex flex-col items-center gap-4 my-8">
      <div className="chord-diagram">
        {/* Fret markers */}
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold text-slate-600">
            Generated Chord Diagram
          </p>
        </div>

        {/* Guitar diagram SVG */}
        <svg
          width="240"
          height="280"
          viewBox="0 0 240 280"
          className="border border-slate-300 rounded bg-white"
        >
          {/* Fretboard background */}
          <rect width="240" height="280" fill="#f8f8f8" />

          {/* Frets (horizontal lines) */}
          {[0, 55, 110, 165, 220].map((y, i) => (
            <line
              key={`fret-${i}`}
              x1="20"
              y1={y + 30}
              x2="220"
              y2={y + 30}
              stroke="#999"
              strokeWidth="2"
            />
          ))}

          {/* Fret numbers */}
          <text x="10" y="85" fontSize="12" fill="#666">
            1
          </text>
          <text x="10" y="140" fontSize="12" fill="#666">
            2
          </text>
          <text x="10" y="195" fontSize="12" fill="#666">
            3
          </text>
          <text x="10" y="250" fontSize="12" fill="#666">
            4
          </text>

          {/* Strings (vertical lines) */}
          {[0, 1, 2, 3, 4, 5].map((str, i) => {
            const x = 40 + str * 30;
            return (
              <line
                key={`string-${i}`}
                x1={x}
                y1={30}
                x2={x}
                y2={250}
                stroke="#333"
                strokeWidth={str === 0 || str === 5 ? 3 : 2}
              />
            );
          })}

          {/* String notes at bottom */}
          {stringNotes.map((note, i) => {
            const x = 40 + i * 30;
            return (
              <text
                key={`note-${i}`}
                x={x}
                y={270}
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                fill="#333"
              >
                {note}
              </text>
            );
          })}

          {/* Dots for fretted notes */}
          {strings.map((fret, stringIdx) => {
            const x = 40 + stringIdx * 30;
            if (fret === -1) {
              // Open string - O at top
              return (
                <circle
                  key={`note-${stringIdx}`}
                  cx={x}
                  cy={20}
                  r="6"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
              );
            } else if (fret === 0) {
              // Muted string - X at top
              return (
                <text
                  key={`note-${stringIdx}`}
                  x={x}
                  y={25}
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#333"
                >
                  ✕
                </text>
              );
            } else {
              // Fretted note - dot on fretboard
              const fretSpacing = 55;
              const y = 30 + (fret - 1) * fretSpacing + fretSpacing / 2;
              return (
                <circle
                  key={`fret-${stringIdx}-${fret}`}
                  cx={x}
                  cy={y}
                  r="8"
                  fill="#333"
                />
              );
            }
          })}
        </svg>

        {/* Legend and description */}
        <div className="text-center text-sm text-slate-600 mt-4">
          <p className="font-semibold">{diagram.description}</p>
          <div className="mt-2 flex justify-center gap-6 text-xs">
            <span>○ = Open String</span>
            <span>✕ = Muted</span>
            <span>● = Fretted Note</span>
          </div>
        </div>
      </div>
    </div>
  );
};
