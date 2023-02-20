import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from '../utils';

const initialState = defaultState();

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    rotate(state, action) {}, //immer
    moveRight(state, action) {},
    moveLeft(state, action) {},
    moveDown(state, action) {},
    resume(state, action) {},
    pause(state, action) {},
    gameOver(state, action) {},
    restart(state, action) {},
  },
});

export const { rotate, moveRight, moveLeft, resume, pause, gameOver, restart } =
  gameSlice.actions;

export default gameSlice.reducer;
