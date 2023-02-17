import React from 'react';
import '../styles/Square.css';

export default function Square(props) {
  const squareColor = `square color-${props.color}`;

  return <div className={squareColor}></div>;
}
