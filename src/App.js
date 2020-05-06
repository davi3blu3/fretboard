import React from 'react';
import './App.css';
import { StandardTuning, ChromaticNotes } from './data/data';

import Fretboard from './components/Fretboard';
import ChordSelect from './components/ChordSelect';

function App() {
  return (
    <div className="App">
      <Fretboard fretboardNotes={StandardTuning}/>
      <ChordSelect scale={ChromaticNotes}/>
    </div>
  );
}

export default App;
