import React from "react";

function Scores(props) {
  return (
    <div className="scores">
      <h2>Game Score: {props.currentScore}</h2>
      <h2>Top Score: {props.topScore}</h2>
    </div>
  );
}

export default Scores;