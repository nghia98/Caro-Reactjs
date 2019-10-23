import React from 'react';

const Square = (props) => {
    const {squareWin, value, onClick} = props;
    if(squareWin)
        return (<button type="button" className= "square square-highlight btn-hover" onClick = {onClick}>{value}</button>)
    return (<button type="button" className= "square btn-hover" onClick = {onClick}>{value}</button>)
}

export default Square;