import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resume, pause, restart, setScore } from '../game-slice';

import '../../../styles/ScoreBoard.css';

export default function ScoreBoard(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver, highestScore } = game;

  useEffect(() => {
    if (score > highestScore) {
      dispatch(setScore(score));
    }
  }, [score, highestScore]);

  function playHandler() {
    if (gameOver) return;
    if (isRunning) {
      dispatch(pause());
    } else {
      dispatch(resume());
    }
  }

  function restartHandler() {
    dispatch(restart());
  }

  return (
    <div className="score-board">
      <div>Score:{score}</div>
      <div>Highest Score: {highestScore}</div>
      <div className="btn-container">
        <button className="score-board-button" onClick={playHandler}>
          {isRunning ? 'Pause' : 'Play'}
        </button>
        <button className="score-board-button" onClick={restartHandler}>
          Restart
        </button>
      </div>
    </div>
  );
}
