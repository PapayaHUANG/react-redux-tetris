import React from 'react';
import Square from './Square';
import '../styles/NextBlock.css';

export default function NextBlock() {
  const block = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const blockToDisplay = block.map((rowArr, row) => {
    return rowArr.map((square, col) => {
      return <Square key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="next-block">{blockToDisplay}</div>;
}
