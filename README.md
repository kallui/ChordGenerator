# ChordGenerator

Simple static frontend app that will help me learn and memorize guitar chords.

Guitar chords are composed of three parts:

- Root note (C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, B)
- Chord type (Major, Minor, 7, Minor7, Major7, Power5)
- CAGED form (C Form, A Form, G Form, E Form, D Form)

This app will generate a random chord by randomizing these 3 parts, and the user can practice
figuring out the chord. There's also a "Show Answer" button and also a Cheat Sheet page.

Live App: https://chord-generator-jet.vercel.app

## App Snippets

### Random Chord Generator

![Main Page](./docs/screenshots/Main-page.png)

### Random Chord Generator with Answer

![Main Page with Answer](./docs/screenshots/Main-page-with-answer.png)

### Cheat Sheet

![Cheat Sheet](./docs/screenshots/Cheat-sheet.png)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
