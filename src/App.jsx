import { useState } from "react";
import { Die } from "./component/Die"
export default function App() {
  
  const [dice, setDice] = useState(generateRandomNumbersArray());


  function generateRandomNumbersArray(){
    const randomNumbers = Array.from({length:10}, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld:false
    }));
    return randomNumbers
  }

  const diceElements = dice.map((die,index) => {
    return <Die key={index} value={die.value} isHeld={die.isHeld} />
  })

  function handleClick(){
    const newRandomNumbers = generateRandomNumbersArray();
    setDice(newRandomNumbers);
  }

  
  return (
    <main>
        <h2>Tenzies</h2>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={handleClick} className="roll-die-button">Roll</button>
    </main>
  )

}
