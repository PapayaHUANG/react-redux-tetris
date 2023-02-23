import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/game/game-slice';

const store = configureStore({ reducer: { game: gameReducer } });

export default store;
