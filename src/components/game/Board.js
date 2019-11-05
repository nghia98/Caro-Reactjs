import React from 'react';
import Square from './Square';
import './css/game.css'

const Board = (props) => {  

    const {squares, onClick, sizeOfBoard, arrWin} = props;

    const renderSquare = (x, y, isWin, squareKey) => {
        return (
                <Square key={squareKey} value={squares[x*sizeOfBoard +y]} squareWin = {isWin} onClick = { () => {onClick(x,y)}}/>
        );
    };

    
    const rows = Array(sizeOfBoard).fill(null);
    const cols = rows;
    const board = rows.map((row, i) => {

        const boardRow = cols.map((col,j) => {

            const squareKey = i * sizeOfBoard + j;
            let isWin = false;

            // Kiểm tra có phải ô thắng không
            for (let k = 0; k < arrWin.length ; k += 1){
                if (squareKey === arrWin[k]){
                    isWin = true;
                }
            }
            
            return renderSquare(i,j, isWin, squareKey);
        });

        const id = i;

        return <div className="board-row" key = {id} > {boardRow}</div>
    })

    return (
            <div>{board}</div>
    ); 
}

 export default Board;