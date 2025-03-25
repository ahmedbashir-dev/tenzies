import { useState } from "react";
import { Die } from "./component/Die"
export default function App() {
  
  const [dice, setDice] = useState(generateRandomNumbersArray());


  function generateRandomNumbersArray(){
    const randomNumbers = Array.from({length:10}, () => Math.floor(Math.random() * 6) + 1);
    return randomNumbers
  }

  const diceElements = dice.map((value, index) => {
    return <Die key={index} value={value} />
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
