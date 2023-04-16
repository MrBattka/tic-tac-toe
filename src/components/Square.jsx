import React from 'react';
import '../App.css';

const Square = ({ onSquareClick, value }) => {

    return (
        <button data-testid="square" className="square" onClick={onSquareClick}>
          {value}
        </button>
      );
}

export default Square