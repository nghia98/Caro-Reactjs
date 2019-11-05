import React from 'react';
import './css/game.css'

const Square = (props) => {
    const {squareWin, value, onClick} = props;
    const classPlayer = (value === 'X') ? 'square btn-hover playerX' : 'square btn-hover playerO';
    if(squareWin)
        return (<button type="button" className= {`square square-highlight btn-hover${ classPlayer}`} onClick = {onClick}>{value}</button>)
    return (<button type="button" className= {classPlayer}  onClick = {onClick}>{value}</button>)
}

export default Square;