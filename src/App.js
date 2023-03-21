import React, { useEffect } from 'react';
import './styles/App.css';

import { useSelector, useDispatch } from 'react-redux';
import {
	moveLeft,
	moveRight,
	moveDown,
	rotate,
	togglePlay,
	restart,
} from './features/game/game-slice';

import Board from './features/game/components/Board';
import NextBlock from './features/game/components/NextBlock';
import ScoreBoard from './features/game/components/ScoreBoard';
import Controls from './features/game/components/Controls';
import MessagePopup from './features/game/components/MessagePopup';

function App() {
	const dispatch = useDispatch();
	const isRunning = useSelector((state) => state.game.isRunning);
	const gameOver = useSelector((state) => state.game.gameOver);
	const score = useSelector((state) => state.game.score);
	const highestScore = useSelector((state) => state.game.highestScore);

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

	function playHandler() {
		if (gameOver) return;
		dispatch(togglePlay());
	}

	function restartHandler() {
		dispatch(restart());
	}

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'ArrowLeft':
				handleLeft();
				break;
			case 'ArrowRight':
				handleRight();
				break;
			case 'ArrowUp':
				handleRotate();
				break;
			case 'ArrowDown':
				handleDown();
				break;
			case 'p':
			case 'P':
				document.getElementById('play-button').click();
				break;
			case 'r':
			case 'R':
				restartHandler();
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Tetris</h1>
			</header>
			<Board />
			<NextBlock />
			<ScoreBoard
				handlers={[playHandler, restartHandler]}
				isRunning={isRunning}
				score={score}
				highestScore={highestScore}
			/>
			<Controls
				handlers={[handleDown, handleLeft, handleRight, handleRotate]}
				isRunning={isRunning}
				gameOver={gameOver}
			/>
			<MessagePopup />
		</div>
	);
}

export default App;
