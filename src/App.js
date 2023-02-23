import './styles/App.css';

import Board from './features/game/components/Board';
import NextBlock from './features/game/components/NextBlock';
import ScoreBoard from './features/game/components/ScoreBoard';
import Controls from './features/game/components/Controls';
import MessagePopup from './features/game/components/MessagePopup';

function App() {
  return (
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
  );
}

export default App;
