import { useState, useEffect } from "react";
import { AppState, GeneratedChord } from "./types";
import { generateRandomChord } from "./lib/randomizer";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/Card";
import { ChordDiagram } from "./components/ChordDiagram";
import { CheatSheet } from "./components/CheatSheet";
import { Music, BookOpen } from "lucide-react";

type PageMode = "practice" | "cheatsheet";

function App() {
  const [pageMode, setPageMode] = useState<PageMode>("practice");
  const [appState, setAppState] = useState<AppState>({
    currentChord: null,
    showAnswer: false,
  });

  // Generate initial chord on mount
  useEffect(() => {
    handleNextChord();
  }, []);

  const handleNextChord = () => {
    const newChord = generateRandomChord();
    setAppState({
      currentChord: newChord,
      showAnswer: false,
    });
  };

  const handleToggleAnswer = () => {
    setAppState((prev) => ({
      ...prev,
      showAnswer: !prev.showAnswer,
    }));
  };

  const currentChord = appState.currentChord;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-slate-900" />
            <h1 className="text-3xl font-bold text-slate-900">
              ChordGenerator
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setPageMode("practice")}
              variant={pageMode === "practice" ? "default" : "outline"}
            >
              Practice
            </Button>
            <Button
              onClick={() => setPageMode("cheatsheet")}
              variant={pageMode === "cheatsheet" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Cheat Sheet
            </Button>
          </div>
        </div>
      </div>

      {/* Page Content */}
      {pageMode === "practice" ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-slate-600">Guitar Chord Practice Randomizer</p>
            </div>

            {/* Main Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Practice a Random Chord</CardTitle>
                <CardDescription>
                  Learn guitar chords with randomized combinations
                </CardDescription>
              </CardHeader>

              <CardContent>
                {currentChord ? (
                  <div className="space-y-6">
                    {/* Chord Display */}
                    <div className="text-center space-y-4">
                      <div className="bg-slate-50 rounded-lg p-8 border-2 border-slate-200">
                        <div className="space-y-3">
                          <p className="text-sm text-slate-600 font-medium">
                            Your Target Chord:
                          </p>
                          <div className="text-5xl font-bold text-slate-900">
                            {currentChord.rootNote}
                            <span className="text-3xl text-slate-600 ml-1">
                              {currentChord.chordType}
                            </span>
                          </div>
                          <p className="text-lg text-slate-700 font-semibold">
                            {currentChord.form}-Form
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 italic">
                        Play this chord combination on your guitar
                      </p>
                    </div>

                    {/* Answer Display */}
                    {appState.showAnswer && currentChord.diagram && (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg -z-10" />
                        <ChordDiagram
                          diagram={currentChord.diagram}
                          form={currentChord.form}
                        />
                      </div>
                    )}

                    {/* Show Answer Toggle */}
                    <div className="flex justify-center pt-4">
                      <Button
                        onClick={handleToggleAnswer}
                        variant={appState.showAnswer ? "secondary" : "outline"}
                        size="lg"
                        className="font-semibold"
                      >
                        {appState.showAnswer ? "Hide" : "Show"} Answer
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600">Loading chord...</p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="justify-center gap-3 border-t border-slate-200">
                <Button
                  onClick={handleNextChord}
                  size="lg"
                  className="font-semibold"
                >
                  Next Chord
                </Button>
              </CardFooter>
            </Card>

            {/* Instructions */}
            <div className="mt-8 text-center text-sm text-slate-600">
              <p>1. Look at the chord combination above</p>
              <p>2. Play it on your guitar in the specified form</p>
              <p>3. Toggle "Show Answer" to see the diagram</p>
              <p>4. Click "Next Chord" to practice another</p>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-xs text-slate-500">
              <p>
                Master the CAGED system • Improve your muscle memory • Practice
                with purpose
              </p>
            </div>
          </div>
        </div>
      ) : (
        <CheatSheet />
      )}
    </div>
  );
}

export default App;
