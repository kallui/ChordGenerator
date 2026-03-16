import React from "react";
import { chordShapeTemplates } from "../lib/chordGenerator";

interface MiniChordDiagramProps {
  strings: (number | null)[];
}

const MiniChordDiagram: React.FC<MiniChordDiagramProps> = ({ strings }) => {
  const fretTop = 18;
  const fretSpacing = 17;
  const visibleFrets = 4;
  const boardLeft = 14;
  const boardRight = 72;
  const boardBottom = fretTop + visibleFrets * fretSpacing;

  return (
    <svg
      width="86"
      height="118"
      viewBox="0 0 86 118"
      className="border border-slate-200 rounded bg-white"
    >
      <rect width="86" height="118" fill="#f9f9f9" />

      {/* Left gutter for fret labels */}
      <rect
        x="0"
        y={fretTop}
        width="10"
        height={visibleFrets * fretSpacing}
        fill="#f1f5f9"
      />

      {/* Frets (4 visible frets = 5 lines) */}
      {Array.from({ length: visibleFrets + 1 }, (_, i) => (
        <line
          key={`fret-${i}`}
          x1={boardLeft}
          y1={fretTop + i * fretSpacing}
          x2={boardRight}
          y2={fretTop + i * fretSpacing}
          stroke="#ccc"
          strokeWidth="1"
        />
      ))}

      {/* Fret labels centered in each fret space */}
      {Array.from({ length: visibleFrets }, (_, i) => (
        <text
          key={`fret-label-${i}`}
          x="8"
          y={fretTop + i * fretSpacing + fretSpacing / 2 + 3}
          fontSize="8"
          textAnchor="end"
          fill="#64748b"
        >
          {i + 1}
        </text>
      ))}

      {/* Strings */}
      {[0, 1, 2, 3, 4, 5].map((str, i) => {
        const x = boardLeft + str * ((boardRight - boardLeft) / 5);
        return (
          <line
            key={`string-${i}`}
            x1={x}
            y1={fretTop}
            x2={x}
            y2={boardBottom}
            stroke="#333"
            strokeWidth={str === 0 || str === 5 ? 1.5 : 1}
          />
        );
      })}

      {/* Notes */}
      {strings.map((fret, stringIdx) => {
        const x = boardLeft + stringIdx * ((boardRight - boardLeft) / 5);
        if (fret === null) {
          return (
            <text
              key={`muted-${stringIdx}`}
              x={x}
              y={12}
              fontSize="8"
              textAnchor="middle"
              fill="#333"
              fontWeight="bold"
            >
              ✕
            </text>
          );
        } else if (fret === 0) {
          return (
            <circle
              key={`open-${stringIdx}`}
              cx={x}
              cy={12}
              r="2"
              fill="none"
              stroke="#333"
              strokeWidth="1"
            />
          );
        } else {
          const y = fretTop + (fret - 1) * fretSpacing + fretSpacing / 2;
          return (
            <circle
              key={`fret-${stringIdx}-${fret}`}
              cx={x}
              cy={y}
              r="3"
              fill="#333"
            />
          );
        }
      })}
    </svg>
  );
};

export const CheatSheet: React.FC = () => {
  const forms = ["E-form", "A-form", "D-form", "C-form", "G-form"] as const;
  const chordTypes = ["Major", "Minor", "7", "Min7", "Maj7", "Power5"] as const;

  return (
    <div className="w-full max-w-7xl mx-auto h-[calc(100vh-110px)] overflow-hidden px-3 py-2">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-slate-900 leading-tight">
          CAGED Chord Table
        </h2>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto overflow-y-hidden h-[calc(100%-44px)]">
        <div className="inline-block min-w-full">
          {/* Header */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="font-bold text-slate-900 px-2 py-1 bg-slate-100 rounded text-sm">
              Form
            </div>
            {chordTypes.map((type) => (
              <div
                key={type}
                className="font-bold text-slate-900 px-1 py-1 bg-slate-100 rounded text-center text-sm"
              >
                {type}
              </div>
            ))}
          </div>

          {/* Rows */}
          {forms.map((form) => (
            <div key={form} className="grid grid-cols-7 gap-1 mb-1">
              {/* Form name */}
              <div className="font-bold text-slate-900 px-2 py-1 bg-slate-50 rounded flex items-center text-sm">
                {form}
              </div>

              {/* Chord diagrams */}
              {chordTypes.map((chordType) => {
                const template =
                  chordShapeTemplates[form as keyof typeof chordShapeTemplates];
                const chord = template?.[chordType as keyof typeof template];

                if (!chord) {
                  return (
                    <div
                      key={`${form}-${chordType}`}
                      className="px-1 py-1 min-h-[122px] bg-slate-50 rounded flex items-center justify-center text-xs text-slate-400"
                    >
                      N/A
                    </div>
                  );
                }

                return (
                  <div
                    key={`${form}-${chordType}`}
                    className="px-1 py-1 min-h-[122px] bg-white rounded flex items-center justify-center"
                    title={`${form} ${chordType}`}
                  >
                    <MiniChordDiagram strings={chord} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
