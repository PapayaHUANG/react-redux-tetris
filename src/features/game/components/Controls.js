import React from 'react';
import '../../../styles/Controls.css';

export default function Controls(props) {
	const {
		isRunning,
		gameOver,
		handlers: [handleDown, handleLeft, handleRight, handleRotate],
	} = props;

	return (
		<div className="controls">
			{/* left */}
			<button
				disabled={!isRunning || gameOver}
				className="control-button"
				onClick={handleLeft}
			>
				◀ Left
			</button>
			{/* right */}
			<button
				disabled={!isRunning || gameOver}
				className="control-button"
				onClick={handleRight}
			>
				Right ▶
			</button>
			{/* rotate */}
			<button
				disabled={!isRunning || gameOver}
				className="control-button"
				onClick={handleRotate}
			>
				▲ Rotate
			</button>
			{/* down */}
			<button
				disabled={!isRunning || gameOver}
				className="control-button"
				onClick={handleDown}
			>
				Down ▼
			</button>
		</div>
	);
}
