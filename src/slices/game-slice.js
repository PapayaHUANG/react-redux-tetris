import { createSlice } from '@reduxjs/toolkit';
import {
  defaultState,
  nextRotation,
  canMoveTo,
  addBlockToBoard,
  checkRows,
  randomShape,
} from '../utils';

const initialState = defaultState();

const gameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    rotate: (state) => {
      const { shape, rotation, board, x, y } = state;
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, board, x, y, newRotation)) {
        state.rotation = newRotation;
      }
    }, //immer
    moveRight: (state) => {
      const { shape, rotation, board, x, y } = state;
      if (canMoveTo(shape, board, x + 1, y, rotation)) {
        state.x = x + 1;
      }
    },
    moveLeft: (state) => {
      const { shape, rotation, board, x, y } = state;
      if (canMoveTo(shape, board, x - 1, y, rotation)) {
        state.x = x - 1;
      }
    },
    moveDown: (state) => {
      const { shape, board, x, y, rotation, nextShape, score, isRunning } =
        state;
      const maybeY = y + 1;
      if (canMoveTo(shape, board, x, y + 1, rotation)) {
        state.y = maybeY;
      }
      const newBoard = addBlockToBoard(shape, board, x, y, rotation);

      const newState = defaultState();
      newState.board = newBoard;
      newState.shape = nextShape;
      newState.nextShape = randomShape();
      newState.score = score;
      newState.isRunning = isRunning;
      if (!canMoveTo(nextShape, newBoard, 0, 4, 0)) {
        console.log('Game should be over...');
        newState.shape = 0;
        newState.gameOver = true;
      }
      newState.score = score + checkRows(newBoard);
      state = newState;
    },
    resume: (state, action) => {},
    pause: (state, action) => {},
    gameOver: (state, action) => {},
    restart: (state, action) => {},
  },
});

export const {
  rotate,
  moveRight,
  moveLeft,
  moveDown,
  resume,
  pause,
  gameOver,
  restart,
} = gameSlice.actions;

export default gameSlice.reducer;
