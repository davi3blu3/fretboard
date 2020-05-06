import React from 'react';
import './App.css';
import Fretboard from './components/Fretboard';
import { StandardTuning } from './data/data';

function App() {
  return (
    <div className="App">
      <Fretboard fretboardNotes={StandardTuning}/>
    </div>
  );
}

export default App;
