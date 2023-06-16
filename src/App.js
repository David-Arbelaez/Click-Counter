import './App.css';
import logo from './images/KA.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clickNum, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(clickNum + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='description'>
        <div className='Text'>
          CLICK COUNTER
        </div>

      </div>
      <div className='main-container'>
        <div className='count'>
          <Counter 
            clickNum={clickNum} 
          />
        </div>
        <div className='buttons'>
          <Button
            text='CLICK!'
            ifClickButton={true}
            handleClick={handleClick}
          />
          <Button
            text='RESTART'
            ifClickButton={false}
            handleClick={restartCounter}
          />
        </div>
      </div>
    </div>
    

  );
}

export default App;
