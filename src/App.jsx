import { useState } from "react";
import { nanoid } from "nanoid";
import { Die } from "./component/Die"

export default function App() {
  
  const [dice, setDice] = useState(generateRandomNumbersArray());


  function hold(id){
    console.log(id);
  }

  function generateRandomNumbersArray(){
    const randomNumbers = Array.from({length:10}, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld:true,
      id: nanoid()
    }));
    return randomNumbers
  }

  const diceElements = dice.map((die) => {
    return <Die key={die.id} id={die.id} hold={hold} value={die.value} isHeld={die.isHeld} />
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
