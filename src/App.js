import './styles/App.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gameReducer from './slices/game-slice';

import Board from './components/Board';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';
import MessagePopup from './components/MessagePopup';

const store = configureStore({ reducer: { game: gameReducer } });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris</h1>
        </header>
        <Board />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
