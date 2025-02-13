import { nanoid } from "nanoid";
import { useState } from "react";
import Confetti from "react-confetti";

const App = () => {
  const [dice, setDice] = useState(() => generateAllNewDice());
  function generateAllNewDice() {
    return new Array(10).fill(10).map(() => ({
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
      isHeld: false,
    }));
  }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value == dice[0].value);

  const handleButtonClick = (id) => {
    setDice((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isHeld: true } : item))
    );
  };

  const handleRollClick = () => {
    gameWon
      ? setDice(generateAllNewDice())
      : setDice((prev) =>
          prev.map((item) =>
            !item.isHeld
              ? { ...item, value: Math.ceil(Math.random() * 6) }
              : item
          )
        );
  };

  return (
    <>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon
          ? "congratulations! You won! press 'New Game' to start again. "
          : ""}
      </div>
      <main className="bg-blue-950 grid place-content-center p-5 min-h-[100vh]">
        <section className="bg-white text-center p-5 rounded-lg h-[500px] w-[min(600px,100%)] ">
          <h1 className="text-5xl font-semibold tracking-wide mb-4">Tenzies</h1>
          <p className="text-balance w-3/4 mx-auto mb-14">
            Roll until all the dices are same. Click each die to freeze it at
            its current value between rolls.
          </p>
          <article className="grid grid-cols-5 mx-auto gap-y-5 max-w-lg mb-16 ">
            {dice.length > 0 &&
              dice.map(({ id, isHeld, value }) => {
                return (
                  <button
                    key={id}
                    data-id={id}
                    aria-pressed={isHeld}
                    aria-label={`this is a die with the value of ${value} and ${
                      isHeld ? "is held" : "is not held"
                    }`}
                    className={`${
                      isHeld ? "bg-green-700" : "bg-white"
                    }  h-14 w-14 text-2xl font-bold rounded-md shadow-[0px_3px_10px_0px_gray] cursor-pointer place-self-center focus:ring-blue-200 focus:ring-4 `}
                    onClick={() => handleButtonClick(id)}
                  >
                    {value}
                  </button>
                );
              })}
          </article>
          <button
            className="bg-blue-600 text-white px-5 py-2 text-lg tracking-wide rounded-sm font-semibold ring-4 cursor-pointer ring-blue-200 active:shadow-[5px_5px_10px_0px_#101288_inset] active:ring-0"
            onClick={handleRollClick}
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
