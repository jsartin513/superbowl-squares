import React,{ useState} from 'react';
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
  const [squareNames, setNames] = useState(new Array(100).fill("names")); 
  
  const fillSquares = () => {
    setNames(new Array(100).fill("new names"));
  }

  return (
    <div className="App">
      <LeftPanel>
        <SquaresGrid squareNames={squareNames}/>
      </LeftPanel>
      <RightPanel>
      <div className="btn" onClick={() => fillSquares()}><button>Fill Squares!</button></div>
        <NameBox />
      </RightPanel>
    </div>
  );
}

export default App;
