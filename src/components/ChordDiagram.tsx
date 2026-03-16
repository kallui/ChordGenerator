import React from "react";
import { ChordDiagram as ChordDiagramType } from "../types";

interface ChordDiagramProps {
  diagram: ChordDiagramType;
  form: string;
  compact?: boolean;
  showLegend?: boolean;
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({
  diagram,
  form,
  compact = false,
  showLegend = true,
}) => {
  const strings = diagram.strings;
  const stringNotes = ["E", "A", "D", "G", "B", "E"]; // Low to high
  const fretTop = compact ? 22 : 30;
  const fretSpacing = compact ? 42 : 55;
  const svgWidth = compact ? 210 : 240;
  const svgHeight = compact ? 235 : 280;
  const viewBox = compact ? "0 0 210 235" : "0 0 240 280";
  const stringLeft = compact ? 36 : 40;
  const stringStep = compact ? 26 : 30;
  const stringBottom = fretTop + fretSpacing * 4;

  // Determine the displayed fret window so transposed shapes stay visible.
  const frettedNotes = strings.filter(
    (fret): fret is number => fret !== null && fret > 0,
  );
  const minFret = frettedNotes.length ? Math.min(...frettedNotes) : 1;
  const startFret = minFret <= 1 ? 1 : minFret;

  return (
    <div
      className={`flex flex-col items-center ${compact ? "gap-2 my-2" : "gap-4 my-8"}`}
    >
      <div className="chord-diagram">
        {/* Fret markers */}
        <div className={`${compact ? "mb-2" : "mb-4"} text-center`}>
          <p
            className={`${compact ? "text-xs" : "text-sm"} font-semibold text-slate-600`}
          >
            Generated Chord Diagram ({form}-form)
          </p>
        </div>

        {/* Guitar diagram SVG */}
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={viewBox}
          className="border border-slate-300 rounded bg-white"
        >
          {/* Fretboard background */}
          <rect width={svgWidth} height={svgHeight} fill="#f8f8f8" />
          {/* Left gutter for fret labels */}
          <rect
            x="0"
            y={fretTop}
            width={compact ? 20 : 24}
            height={fretSpacing * 4}
            fill="#f1f5f9"
          />

          {/* Frets (horizontal lines) */}
          {[0, 55, 110, 165, 220].map((_, i) => (
            <line
              key={`fret-${i}`}
              x1={compact ? 18 : 20}
              y1={fretTop + i * fretSpacing}
              x2={compact ? 196 : 220}
              y2={fretTop + i * fretSpacing}
              stroke="#999"
              strokeWidth="2"
            />
          ))}

          {/* Fret numbers centered between fret lines, in left gutter */}
          {[0, 1, 2, 3].map((fretIdx) => (
            <text
              key={`fret-label-${fretIdx}`}
              x={compact ? "13" : "16"}
              y={fretTop + fretIdx * fretSpacing + fretSpacing / 2 + 4}
              fontSize={compact ? "10" : "12"}
              textAnchor="end"
              fill="#475569"
            >
              {startFret + fretIdx}
            </text>
          ))}

          {/* Strings (vertical lines) */}
          {[0, 1, 2, 3, 4, 5].map((str, i) => {
            const x = stringLeft + str * stringStep;
            return (
              <line
                key={`string-${i}`}
                x1={x}
                y1={fretTop}
                x2={x}
                y2={stringBottom}
                stroke="#333"
                strokeWidth={str === 0 || str === 5 ? 3 : 2}
              />
            );
          })}

          {/* String notes at bottom */}
          {stringNotes.map((note, i) => {
            const x = stringLeft + i * stringStep;
            return (
              <text
                key={`note-${i}`}
                x={x}
                y={stringBottom + (compact ? 14 : 20)}
                fontSize={compact ? "10" : "12"}
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
            const x = stringLeft + stringIdx * stringStep;
            if (fret === null) {
              // Muted string - X at top
              return (
                <text
                  key={`note-${stringIdx}`}
                  x={x}
                  y={compact ? 18 : 25}
                  fontSize={compact ? "12" : "16"}
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#333"
                >
                  ✕
                </text>
              );
            } else if (fret === 0) {
              // Open string - O at top
              return (
                <circle
                  key={`note-${stringIdx}`}
                  cx={x}
                  cy={compact ? 16 : 20}
                  r={compact ? "4" : "6"}
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
              );
            } else {
              // Fretted note - dot on fretboard
              const y =
                fretTop + (fret - startFret) * fretSpacing + fretSpacing / 2;
              return (
                <circle
                  key={`fret-${stringIdx}-${fret}`}
                  cx={x}
                  cy={y}
                  r={compact ? "6" : "8"}
                  fill="#333"
                />
              );
            }
          })}
        </svg>

        {/* Legend and description */}
        {showLegend && (
          <div className="text-center text-sm text-slate-600 mt-4">
            <p className="font-semibold">{diagram.description}</p>
            <div className="mt-2 flex justify-center gap-6 text-xs">
              <span>○ = Open String</span>
              <span>✕ = Muted</span>
              <span>● = Fretted Note</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
