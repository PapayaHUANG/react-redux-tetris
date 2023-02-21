import React from 'react';
import '../styles/Controls.css';

import { useSelector, useDispatch } from 'react-redux';
import { moveLeft, moveRight, moveDown, rotate } from '../slices/game-slice';

export default function Controls(props) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);

  const handleRotate = () => {
    dispatch(rotate());
  };

  const handleRight = () => {
    dispatch(moveRight());
  };

  const handleLeft = () => {
    dispatch(moveLeft());
  };

  const handleDown = () => {
    dispatch(moveDown());
  };
  return (
    <div className="controls">
      <button className="control-button" onClick={handleLeft}>
        Left
      </button>
      <button className="control-button" onClick={handleRight}>
        Right
      </button>
      <button className="control-button" onClick={handleRotate}>
        Rotate
      </button>
      <button className="control-button" onClick={handleDown}>
        Down
      </button>
    </div>
  );
}
