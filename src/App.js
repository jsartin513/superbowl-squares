import React,{ useState} from 'react';
import './App.css';
import styled from 'styled-components'
import { InstructionsBox } from './components/InstructionsBox';
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
    <div className="OuterApp">
      <InstructionsBox />
      <div className="App">
        <LeftPanel>
          <SquaresGrid squareNames={squareNames}/>
        </LeftPanel>
        <RightPanel>
          <NameBox confirmNameList = {fillSquares}/>
        </RightPanel>
      </div>
      <div className="footer">
        <div className="footerContent">
          <div className="footerLeft">© 2021 Jess Sartin and Mike Spremulli</div>
          <div className="footerRight">
            <a href="https://github.com/jsartin513/superbowl-squares">Source</a> <br/>
            <a href="https://github.com/jsartin513/superbowl-squares/issues">Having a problem?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
