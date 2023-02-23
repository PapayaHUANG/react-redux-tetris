import './styles/App.css';

import { Provider } from 'react-redux';

import Board from './features/game/components/Board';
import NextBlock from './features/game/components/NextBlock';
import ScoreBoard from './features/game/components/ScoreBoard';
import Controls from './features/game/components/Controls';
import MessagePopup from './features/game/components/MessagePopup';

import store from './store';

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
