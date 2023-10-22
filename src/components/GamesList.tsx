import React, { useState } from "react";
import Game from "./Game";
import { Obj } from "./Objects";

const GamesList: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [totalScore, setTotalscore] = useState<number>(0);

  const [randomSymbol1, setRandomSymbol1] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol2, setRandomSymbol2] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol3, setRandomSymbol3] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol4, setRandomSymbol4] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol5, setRandomSymbol5] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol6, setRandomSymbol6] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol7, setRandomSymbol7] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol8, setRandomSymbol8] = useState<
    [img: string, scroe: number]
  >(["", 0]);
  const [randomSymbol9, setRandomSymbol9] = useState<
    [img: string, scroe: number]
  >(["", 0]);

  const symbols: Obj[] = [
    { id: 1, image: "🍒", score: 5 },
    { id: 2, image: "🍊", score: 10 },
    { id: 3, image: "🍋", score: 15 },
    { id: 4, image: "🍍", score: 20 },
    { id: 5, image: "🍌", score: 25 },
    { id: 6, image: "🍇", score: 30 },
    { id: 7, image: "🔔", score: 35 },
    { id: 8, image: "💰", score: 40 },
    { id: 9, image: "💎", score: 45 },
  ];

  const spinning = (e: React.FormEvent) => {
    e.preventDefault();

    setTotalscore(score);

    if (totalScore <= 0) {
      window.alert("You can't play with zero balance");
      setScore(0);
    } else if (totalScore < 2 && totalScore > 0) {
      window.alert("Sorry you have inserficient balance");
      setScore(0);
    } else {
      const randomIndex1 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol1([
        symbols[randomIndex1].image,
        symbols[randomIndex1].score,
      ]);
      const randomIndex2 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol2([
        symbols[randomIndex2].image,
        symbols[randomIndex2].score,
      ]);
      const randomIndex3 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol3([
        symbols[randomIndex3].image,
        symbols[randomIndex3].score,
      ]);
      const randomIndex4 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol4([
        symbols[randomIndex4].image,
        symbols[randomIndex4].score,
      ]);
      const randomIndex5 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol5([
        symbols[randomIndex5].image,
        symbols[randomIndex5].score,
      ]);
      const randomIndex6 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol6([
        symbols[randomIndex6].image,
        symbols[randomIndex6].score,
      ]);
      const randomIndex7 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol7([
        symbols[randomIndex7].image,
        symbols[randomIndex7].score,
      ]);
      const randomIndex8 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol8([
        symbols[randomIndex8].image,
        symbols[randomIndex8].score,
      ]);
      const randomIndex9 = Math.floor(Math.random() * symbols.length);
      setRandomSymbol9([
        symbols[randomIndex9].image,
        symbols[randomIndex9].score,
      ]);
      scores();
    }
  };

  const scores = () => {
    let newScore1: number = 0;
    let newScore2: number = 0;
    let newScore3: number = 0;

    let playScore: number;
    if (
      randomSymbol1[0] === randomSymbol2[0] &&
      randomSymbol1[0] === randomSymbol3[0]
    ) {
      newScore1 = randomSymbol1[1];
    } else if (
      randomSymbol4[0] === randomSymbol5[0] &&
      randomSymbol4[0] === randomSymbol6[0]
    ) {
      newScore2 = randomSymbol4[1];
    } else if (
      randomSymbol7[0] === randomSymbol8[0] &&
      randomSymbol7[0] === randomSymbol9[0]
    ) {
      newScore3 = randomSymbol7[1];
    } else {
      newScore1 = 0;
      newScore2 = 0;
      newScore3 = 0;
    }

    playScore = newScore1 + newScore2 + newScore3;

    if (playScore > 0) {
      setTotalscore(totalScore + playScore);
      window.alert(`You have score ${playScore}`);
    } else {
      if (totalScore > 2) {
        setTotalscore(totalScore - 2);
      }
    }
  };

  return (
    <form className="gamesList">
      <div className="total__score">
        <p>BAL: </p>
        {totalScore > 5 ? (
          <h3>{totalScore}</h3>
        ) : (
          <input
            type="number"
            value={score.toString()}
            onChange={(e) => {
              setScore(Number(e.target.value));
            }}
          />
        )}
      </div>
      <div className="gameFace">
        <Game randomSymbo={randomSymbol1[0]} />
        <Game randomSymbo={randomSymbol2[0]} />
        <Game randomSymbo={randomSymbol3[0]} />
        <Game randomSymbo={randomSymbol4[0]} />
        <Game randomSymbo={randomSymbol5[0]} />
        <Game randomSymbo={randomSymbol6[0]} />
        <Game randomSymbo={randomSymbol7[0]} />
        <Game randomSymbo={randomSymbol8[0]} />
        <Game randomSymbo={randomSymbol9[0]} />
      </div>

      <div className="game__footer">
        <input
          className="submit__button"
          type="submit"
          value="SPIN"
          onClick={(e: React.FormEvent) => spinning(e)}
        />
      </div>
    </form>
  );
};

export default GamesList;
