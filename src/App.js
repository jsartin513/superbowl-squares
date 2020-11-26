import React from 'react';
import './App.css';
import styled from 'styled-components'
import { NameBox } from './components/NameBox';
import { SquaresGrid } from './components/SquaresGrid';


export const LeftPanel = styled.div`
  flex: 5;
`

export const RightPanel = styled.div`
  flex: 2;
`

function App() {
  return (
    <div className="App">
      <LeftPanel>
        <SquaresGrid />
      </LeftPanel>
      <RightPanel>
        <NameBox />
      </RightPanel>
    </div>
  );
}

export default App;
