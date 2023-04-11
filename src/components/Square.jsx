import React from 'react';
import '../App.css';

const Square = ({ onSquareClick, value }) => {
    return (
        <button className="square" onClick={onSquareClick}>
          {value}
        </button>
      );
}

export default Square