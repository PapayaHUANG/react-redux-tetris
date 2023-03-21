import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setScore } from '../game-slice';

import '../../../styles/ScoreBoard.css';

export default function ScoreBoard(props) {
	const {
		handlers: [playHandler, restartHandler],
		isRunning,
		score,
		highestScore,
	} = props;

	const dispatch = useDispatch();

	useEffect(() => {
		if (score > highestScore) {
			dispatch(setScore(score));
		}
	}, [score, highestScore]);

	return (
		<div className="score-board">
			<div>Score:{score}</div>
			<div>Highest Score: {highestScore}</div>
			<div className="btn-container">
				<button
					id="play-button"
					className="score-board-button"
					onClick={playHandler}
				>
					<b>P</b>
					{isRunning ? 'ause' : 'lay'}
				</button>
				<button className="score-board-button" onClick={restartHandler}>
					<b>R</b>estart
				</button>
			</div>
		</div>
	);
}
