import React from "react";
import { chordShapeTemplates } from "../lib/chordGenerator";
import { generateChord } from "../lib/chordGenerator";

interface MiniChordDiagramProps {
  strings: (number | null)[];
}

const MiniChordDiagram: React.FC<MiniChordDiagramProps> = ({ strings }) => {
  const stringNotes = ["E", "A", "D", "G", "B", "E"];

  return (
    <svg
      width="80"
      height="100"
      viewBox="0 0 80 100"
      className="border border-slate-200 rounded bg-white"
    >
      <rect width="80" height="100" fill="#f9f9f9" />

      {/* Frets */}
      {[0, 20, 40, 60].map((y, i) => (
        <line
          key={`fret-${i}`}
          x1="8"
          y1={y + 10}
          x2="72"
          y2={y + 10}
          stroke="#ccc"
          strokeWidth="1"
        />
      ))}

      {/* Strings */}
      {[0, 1, 2, 3, 4, 5].map((str, i) => {
        const x = 13 + str * 10;
        return (
          <line
            key={`string-${i}`}
            x1={x}
            y1={10}
            x2={x}
            y2={70}
            stroke="#333"
            strokeWidth={str === 0 || str === 5 ? 1.5 : 1}
          />
        );
      })}

      {/* Notes */}
      {strings.map((fret, stringIdx) => {
        const x = 13 + stringIdx * 10;
        if (fret === null) {
          return (
            <text
              key={`muted-${stringIdx}`}
              x={x}
              y={8}
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
              cy={8}
              r="2"
              fill="none"
              stroke="#333"
              strokeWidth="1"
            />
          );
        } else {
          const fretSpacing = 20;
          const y = 10 + (fret - 1) * fretSpacing + fretSpacing / 2;
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
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Chord Templates
        </h2>
        <p className="text-slate-600">
          All 30 chord shape templates in the CAGED system. These templates are
          transposed algorithmically for any root note.
        </p>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            <div className="font-bold text-slate-900 p-2 bg-slate-100 rounded">
              Form
            </div>
            {chordTypes.map((type) => (
              <div
                key={type}
                className="font-bold text-slate-900 p-2 bg-slate-100 rounded text-center"
              >
                {type}
              </div>
            ))}
          </div>

          {/* Rows */}
          {forms.map((form) => (
            <div key={form} className="grid grid-cols-7 gap-2 mb-4">
              {/* Form name */}
              <div className="font-bold text-slate-900 p-2 bg-slate-50 rounded flex items-center">
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
                      className="p-2 bg-slate-50 rounded flex items-center justify-center text-xs text-slate-400"
                    >
                      N/A
                    </div>
                  );
                }

                return (
                  <div
                    key={`${form}-${chordType}`}
                    className="p-2 bg-white rounded flex items-center justify-center"
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

      {/* Legend */}
      <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-2">Legend</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
          <div>● = Fretted note (press down)</div>
          <div>○ = Open string (play without fretting)</div>
          <div>✕ = Muted string (don't play)</div>
          <div>Blank = Chord not available in this form</div>
        </div>
      </div>

      {/* Info box */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-bold text-blue-900 mb-2">How It Works</h3>
        <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
          <li>
            These 30 templates represent every chord shape across all 5 CAGED
            forms
          </li>
          <li>
            The app automatically transposes these templates to any root note
          </li>
          <li>
            For example: E-form Major (shown above) becomes G Major by adding 3
            frets
          </li>
          <li>
            This algorithm eliminates the need for 200+ hardcoded chord diagrams
          </li>
        </ul>
      </div>
    </div>
  );
};
