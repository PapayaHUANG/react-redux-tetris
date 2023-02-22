import React from 'react';
import '../styles/Controls.css';

import { useSelector, useDispatch } from 'react-redux';
import { moveLeft, moveRight, moveDown, rotate } from '../slices/game-slice';

export default function Controls(props) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleRotate = () => {
    if (!isRunning || gameOver) return;
    dispatch(rotate());
  };

  const handleRight = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveRight());
  };

  const handleLeft = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveLeft());
  };

  const handleDown = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveDown());
  };
  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleLeft}
      >
        Left
      </button>
      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleRight}
      >
        Right
      </button>
      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleRotate}
      >
        Rotate
      </button>
      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={handleDown}
      >
        Down
      </button>
    </div>
  );
}
