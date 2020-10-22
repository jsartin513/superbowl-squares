import React from 'react';
import './App.css';
import { NameBox } from './components/NameBox';
import { SquaresGrid } from './components/SquaresGrid';


function App() {
  return (
    <div className="App">
     <SquaresGrid />
     <NameBox />
    </div>
  );
}

export default App;
