import React from 'react';
import '../styles/ScoreBoard.css';

export default function ScoreBoard(props) {
  return (
    <div className="score-board">
      <div>Score:{props.score}</div>
      <div>Level: 1</div>
      <button className="score-board-button">Play</button>
      <button className="score-board-button">Restart</button>
    </div>
  );
}
