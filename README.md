# ChordGenerator – Guitar Chord Practice Randomizer

A modern web-based training tool for guitarists to practice chords through randomized combinations of music theory components.

## 🎵 Features

### Core Functionality

- **Randomizer Engine**: Generates random chord combinations from three distinct variables:
  - Root Note (C, C#, D, D#, E, F, F#, G, G#, A, A#, B)
  - Chord Type (Major, Minor, Major7, Minor7, Dominant7)
  - CAGED Shape (C-form, A-form, G-form, E-form, D-form)

- **Practice Mode**: Displays the generated combination (e.g., "B♭ - Major7 - A form") for the user to play on their guitar

- **Cheat Sheet/Help**: Interactive "Show Answer" feature that displays a visual guitar chord diagram for the generated chord form

- **Progress Navigation**: Simple, clean UI controls to navigate between chords and toggle visibility of the cheat sheet

### Design

- Clean, minimalist, responsive UI using **shadcn/ui** component library
- Built with **React** and **TypeScript** for type safety
- Styled with **Tailwind CSS** for modern aesthetics
- Visual chord diagrams showing fret positions, open strings, and muted strings

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons

## 📋 Project Structure

```
ChordGenerator/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   └── Card.tsx           # Card layout components
│   │   └── ChordDiagram.tsx       # Visual chord diagram display
│   ├── lib/
│   │   ├── utils.ts              # Utility functions
│   │   └── randomizer.ts         # Chord randomizer logic
│   ├── data/
│   │   └── chords.ts             # Chord database with diagrams
│   ├── types.ts                  # TypeScript type definitions
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd ChordGenerator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:5173`

## 📖 Usage

1. **View Target Chord**: The app displays a random chord combination (Root Note + Chord Type + CAGED Form)
2. **Practice**: Play the chord on your guitar using the specified form
3. **Get Help**: Click "Show Answer" to view the interactive guitar chord diagram
4. **Next Chord**: Click "Next Chord" button to generate a new random combination
5. **Repeat**: Practice as much as you want!

## 🎸 Chord Diagram Guide

The chord diagrams display:

- **Horizontal lines**: Frets on the guitar (1-4 shown)
- **Vertical lines**: Guitar strings (E-A-D-G-B-E, low to high)
- **●**: Fretted note – press down at this position
- **○**: Open string – play without fretting
- **✕**: Muted string – don't play this string
- **Fret numbers**: (1-4) on the left side

## 🎯 Features for Guitarists

### Why This Tool is Effective

- **Randomization**: Keeps practice sessions interesting and prevents muscle memory bias
- **CAGED System**: Helps learn multiple voicings of the same chord
- **Theory Integration**: Understand how chords are built across the fingerboard
- **Visual Learning**: Instant visual feedback on chord positions

### Recommended Practice Routine

1. Start with major and minor chords
2. Progress to 7th chords (Major7, Minor7, Dominant7)
3. Focus on smooth transitions between forms
4. Time yourself for speed challenges
5. Mix different keys to avoid getting stuck in comfort zones

## ⚡ Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Adding More Chords

Edit `src/data/chords.ts` to add more chord types or variations. Each chord needs:

- Root note and chord type
- CAGED form diagrams with fret positions
- String descriptions

### Modifying Styles

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Tailwind classes in component files

### Adding New Randomizer Options

Extend `src/types.ts` and `src/lib/randomizer.ts` to add new variables like:

- Tempo ranges
- Strumming patterns
- Time signatures
- Fingerpicking patterns

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add more chord voicings
- Improve the chord diagram visualization
- Add new practice modes
- Enhance the UI/UX

## 💡 Future Enhancements

Potential features for future versions:

- Audio playback of chord sounds
- Progress tracking and statistics
- Difficulty levels
- Custom chord sets
- Finger position recommendations
- Video tutorials
- Mobile app version
- Dark mode theme

## 🆘 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Not Installing

Try clearing npm cache:

```bash
npm cache clean --force
npm install
```

### Build Errors

Make sure you're using a compatible Node version:

```bash
node --version  # Should be v16+
```

## 📧 Feedback

If you have suggestions or find issues, please feel free to create an issue or contribute improvements!

---

Happy practicing! 🎸
