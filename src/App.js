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
  const [squareNames, setNames] = useState(new Array(100).fill("")); 

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  const fillSquares = (nameList) => {
    const newNames = [];
    for (let i = 0; i < 100; i++) {
      newNames[i] = nameList[i % nameList.length];
    }

    setNames(shuffleArray(newNames));
  }

  return (
    <div className="App">
      <LeftPanel>
        <SquaresGrid squareNames={squareNames}/>
      </LeftPanel>
      <RightPanel>
        <NameBox confirmNameList = {fillSquares}/>
      </RightPanel>
    </div>
  );
}

export default App;
