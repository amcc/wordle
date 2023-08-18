import React from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
const rows = [row1, row2, row3];

function Keyboard({ answer, guessResults }) {
  const trimmedResults = guessResults.slice(0, NUM_OF_GUESSES_ALLOWED);
  const checkedResults = trimmedResults.flatMap((result) =>
    checkGuess(result.guess, answer)
  );

  // have to check through all the results to see
  // if letter has now been misplaced

  // const filteredResults = checkedResults.filter(
  //   (element, index, array) =>
  //     index === array.findIndex((t) => t.letter === element.letter)
  // );
  // console.log("filteredResults", filteredResults);

  const keys = rows.map((row) => {
    const rowArray = row.map((letter) => {
      let status = "";
      checkedResults.forEach((result) => {
        if (result.letter === letter) {
          status = result.status;
        }
      });
      return { letter: letter, status: status };
    });
    return rowArray;
  });
  console.log("keys", keys);

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <div key={letter.letter} className={`key ${letter.status}`}>
              {letter.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
