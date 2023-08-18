import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ answer, guessResults }) {
  const trimmedGuessResults = guessResults.slice(0, NUM_OF_GUESSES_ALLOWED);
  const emptyRowNumber =
    trimmedGuessResults.length < NUM_OF_GUESSES_ALLOWED
      ? NUM_OF_GUESSES_ALLOWED - trimmedGuessResults.length
      : 0;

  return (
    <div className="guess-results">
      {trimmedGuessResults.map((guessResult) => (
        <Guess answer={answer} guess={guessResult} key={guessResult.id} />
      ))}
      {range(emptyRowNumber).map((_, index) => (
        <p key={index} className="guess">
          {range(5).map((_, cellindex) => (
            <span key={"cell" + cellindex} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
