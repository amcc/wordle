import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

const status = {
  playing: "PLAYING",
  won: "WON",
  lost: "LOST",
};

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState(status.playing);

  console.info({ answer });

  const guessResult = checkGuess(
    guessResults[guessResults.length - 1]?.guess,
    answer
  );

  if (gameStatus === status.playing) {
    if (guessResult?.every((result) => result.status === "correct")) {
      setGameStatus(status.won);
      console.log("won");
    } else if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(status.lost);
      console.log("lost");
    }
  }

  const disabled = gameStatus !== status.playing;

  const newGame = () => {
    setAnswer(sample(WORDS));
    setGuessResults([]);
  };

  return (
    <div>
      <GuessResults answer={answer} guessResults={guessResults} />
      <GuessInput setGuessResults={setGuessResults} disabled={disabled} />
      <Keyboard answer={answer} guessResults={guessResults} />
      {gameStatus === status.won && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guessResults.length} guess{guessResults.length > 1 && "es"}
            </strong>
            .
          </p>
        </div>
      )}
      {gameStatus === status.lost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <button className="new-game" onClick={() => newGame()}>
        New Game
      </button>
    </div>
  );
}

export default Game;
