import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameReducer from './features/game/game-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['highestScore'],
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({ reducer: { game: persistedReducer } });

export const persistor = persistStore(store);
