import { useState, useEffect } from "react";
import { AppState } from "./types";
import { generateRandomChord } from "./lib/randomizer";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/Card";
import { ChordDiagram } from "./components/ChordDiagram";
import { CheatSheet } from "./components/CheatSheet";
import { Music, BookOpen, Eye, EyeOff, RefreshCw, Github } from "lucide-react";

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
            <a
              href="https://github.com/kallui/ChordGenerator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Page Content */}
      {pageMode === "practice" ? (
        <div className="max-w-7xl mx-auto h-[calc(100vh-120px)] overflow-hidden">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle>Practice Mode</CardTitle>
                <CardDescription>
                  Read the target chord and play it before revealing the answer.
                </CardDescription>
              </CardHeader>

              <CardContent className="h-[calc(100%-110px)] flex items-center">
                {currentChord ? (
                  <div className="w-full text-center space-y-5">
                    <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                      <p className="text-sm text-slate-600 font-medium mb-2">
                        Your Target Chord
                      </p>
                      <div className="text-5xl font-bold text-slate-900 leading-none">
                        {currentChord.rootNote}
                        <span className="text-2xl text-slate-600 ml-2 align-middle">
                          {currentChord.chordType}
                        </span>
                      </div>
                      <p className="text-lg text-slate-700 font-semibold mt-3">
                        {currentChord.form}-Form
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 italic">
                      Play the chord, then reveal answer when ready.
                    </p>
                  </div>
                ) : (
                  <div className="w-full text-center">
                    <p className="text-slate-600">Loading chord...</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="h-full flex flex-col gap-3">
              <Card className="shadow-lg border-slate-200/80 bg-white/90 backdrop-blur-sm">
                <CardContent className="pt-4 pb-4">
                  <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
                    <Button
                      onClick={handleToggleAnswer}
                      variant={appState.showAnswer ? "default" : "ghost"}
                      size="default"
                      className="h-10 font-semibold"
                    >
                      {appState.showAnswer ? (
                        <EyeOff className="w-4 h-4 mr-2" />
                      ) : (
                        <Eye className="w-4 h-4 mr-2" />
                      )}
                      {appState.showAnswer ? "Hide" : "Show"} Answer
                    </Button>
                    <Button
                      onClick={handleNextChord}
                      variant="outline"
                      size="default"
                      className="h-10 font-semibold bg-white"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Next Chord
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Reveal only when ready, then generate a new target.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg flex-1 min-h-0 border-slate-200/80 bg-white/95">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Answer</CardTitle>
                    <span
                      className={`rounded-full px-2 py-1 text-[11px] font-medium ${
                        appState.showAnswer
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {appState.showAnswer ? "Visible" : "Hidden"}
                    </span>
                  </div>
                  <CardDescription className="text-xs">
                    Current chord diagram preview.
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[calc(100%-88px)] overflow-hidden pt-0">
                  {appState.showAnswer && currentChord?.diagram ? (
                    <div className="h-full flex items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50">
                      <ChordDiagram
                        diagram={currentChord.diagram}
                        form={currentChord.form}
                        compact={true}
                        showLegend={false}
                      />
                    </div>
                  ) : (
                    <div className="h-full rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-center justify-center px-6 text-center text-sm text-slate-500">
                      Click "Show Answer" to reveal the chord diagram.
                    </div>
                  )}
                </CardContent>
              </Card>
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
