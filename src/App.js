
import './App.css';
import { Button } from './components/Button';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import { Wrapper } from './components/Wrapper';
import { CalcProvider } from './context/calcContext';
const buttonValues = [
  ['c', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

function App() {
  return (
    <div className="App">
        <h1 style={{fontWeight:"bold",borderBottom:"1px solid blue "}}>Calculate Me!!</h1>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {buttonValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
  );
}

export default App;
