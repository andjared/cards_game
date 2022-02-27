import React from "react";
import Button from "./Button";

export default function Players({
  round,
  playerOneScore,
  playerTwoScore,
  handleClick,
  handleRestart,
}) {
  return (
    <div>
      <h2>Round {round}</h2>
      <Button handleClick={handleClick} btnText="play" />
      <div className="player-one">
        <h2>Player One score: {playerOneScore}</h2>
      </div>
      <div className="player-two">
        <h2>Player Two Score: {playerTwoScore}</h2>
      </div>
      <div className="winner">
        {round === 5 ? (
          <div>
            <h1>
              The winner is
              {playerOneScore > playerTwoScore ? " Player One" : " Player Two"}.
              Do you want to start new game?
            </h1>
            <Button btnText="yes" handleClick={handleRestart} />
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
}
