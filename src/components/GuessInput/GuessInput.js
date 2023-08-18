import React, { useState } from "react";

function GuessInput({ setGuessResults, disabled }) {
  const [guess, setGuess] = useState("");
  function submitGuess(event) {
    event.preventDefault();

    if (!guess) return;

    const submittedGuess = {
      id: crypto.randomUUID(),
      guess: guess.toUpperCase(),
    };

    setGuessResults((guessResults) => [...guessResults, submittedGuess]);

    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        maxLength={5}
        value={guess}
        disabled={disabled}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
