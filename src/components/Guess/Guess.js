import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  // console.log("guess", guess);
  const guessResult = checkGuess(guess.guess, answer);

  return (
    <p key={guess.id} className="guess">
      {guessResult.map((result, index) => (
        <span key={index} className={`cell ${result.status}`}>
          {result.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
