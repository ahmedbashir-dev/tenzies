import { Die } from "./component/Die"
export default function App() {
  function generateAllNewDice(){
    const randomNumbers = Array.from({length:10}, () => Math.floor(Math.random() * 6) + 1);
    console.log(randomNumbers);
  }

  generateAllNewDice();
  return (
    <main>
        <h2>Tenzies</h2>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  )

}
