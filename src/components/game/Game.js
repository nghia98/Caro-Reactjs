import React from 'react'
import Board from './Board'
import CheckWinner from '../../algorithm/CheckWin'

const rows = 20;
const cols = 20;

const Game = (props) => {
    
    const {history, stepNumber, xIsNext, isDescending, actions} = props;

    

    // Hàm xử lý khi người chơi đánh
    const handleClick = (x,y) => {
    
        const historyCoppy = history.slice(0, stepNumber + 1);
        const current = historyCoppy[historyCoppy.length - 1];
        const squares = current.squares.slice();
        let {id, location} = current;
        
        // Kiểm tra đi trùng or đã thắng
        if(CheckWinner(squares, location.curX, location.curY) || squares[x*cols + y]){
            return;
        }
    
        squares[x*cols + y] = xIsNext ? 'X' : 'O';
        id += 1;
        location = {curX : x, curY : y};
        const historyAdd = historyCoppy.concat([{
            id, squares, location
            }]);
    
        actions.handleClick(historyAdd);       
    };
    
    // Map history với từng bước đi
    let moves = history.map((step, move) => {
        const desc = move ? `Đến bước # ${move} (${step.location.curX},${step.location.curY})` : 'Bắt đầu game';
        const className = stepNumber === move ? "btn-bold" : ""
        
        return (<li key={step.id}>
                    <button type = "button" className= {className} onClick={() => actions.jumpTo(move)}>{desc}</button>
                </li>);
    });

    // Kiểm tra người chiến thắng
    let status;

    const current = history[stepNumber];  
    const {location} = current;   
    const arrWin = CheckWinner(current.squares, location.curX, location.curY);

    if(arrWin){
        status = `Người chiến thắng : ${  current.squares[arrWin[0]]}`;
    }
    else if(stepNumber === 400){
        status = "Hòa nhau !" ;
    }
    else{
        status = `Người chơi kế tiếp : ${ xIsNext ? 'X' : 'O'}`;
    }

    // Thay đổi trạng thái sort
    if (!isDescending) {
        moves = moves.reverse();
    }   
    
    return (
        <div>
            <div className= "game">
                <div className="game-board">
                    <Board squares = {current.squares} onClick = { (x,y) => handleClick(x,y)} arrWin = {arrWin} sizeOfBoard = {rows}/>
                </div>
                <div className="game-info">
                    <p><b>{status}</b></p>
                    <div>
                        <center><button type = "button" onClick = {actions.resetGame} >Chơi lại</button></center>
                    </div>
                    <br/>
                    <div>
                        <center><button type = "button" onClick={actions.sortHistory}>Sắp xếp {isDescending  ? '↓' : '↑' }</button></center>
                    </div>
                    <ol>{moves}</ol>
                </div>
            </div>
                
        </div>
    );

}

export default Game