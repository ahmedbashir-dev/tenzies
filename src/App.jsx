import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { useStopwatch } from "react-timer-hook";
import { Die } from "./component/Die"

export default function App() {
  
  const [dice, setDice] = useState(() => generateRandomNumbersArray());
  const buttonRef = useRef(null);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);
  const {
    seconds,
    minutes,
    reset,
    pause
  } = useStopwatch({  autoStart: true });

  function hold(id){
    setDice(prevDice => (prevDice.map(die => (
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))))
  }

  function generateRandomNumbersArray(){
    const randomNumbers = Array.from({length:10}, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld:false,
      id: nanoid()
    }));
    return randomNumbers
  }

  const diceElements = dice.map((die) => {
    return <Die key={die.id} id={die.id} hold={hold} value={die.value} isHeld={die.isHeld} />
  })

  function rollDice(){
    if(!gameWon){
      const newRandomNumbers = dice.map(die => (
        die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}
      ))
      setDice(newRandomNumbers);
    }
    else{
      setDice(generateRandomNumbersArray());
      reset();
    }
  }

  const gameWon = dice.every(die => die.value === dice[0].value) && dice.every(die => die.isHeld);

  useEffect(() => {
    if(gameWon){
      buttonRef.current.focus();
      pause();
    }
  }, [gameWon]);
  
  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite">
        {gameWon && <p role="alert" className="sr-only">You won! Press New Game to start new game</p>} 
      </div>
        <h2>Tenzies</h2>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="timer">
          <span>Time Elapsed:</span> <span className="time">{minutes.toString().padStart(2,0)}:{seconds.toString().padStart(2,0)}</span>
        </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <button ref={buttonRef} onClick={rollDice} className="roll-die-button">{gameWon ? "New Game": "Roll"}</button>
    </main>
  )

}
