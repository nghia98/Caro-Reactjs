import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import Board from './Board'
import CheckWinner from '../../algorithm/CheckWin'
import './css/game.css'

const rows = 20;
const cols = 20;

const Game = (props) => {
    
    const {history, stepNumber, xIsNext, isDescending, actions, userInfo} = props;

    if(userInfo === null){
        const token = localStorage.getItem('token');
        actions.fetchInfoUser(token);
    }

    const getMoveAI = (squares) => {
        const move = {curX: -1, curY: -1};
        do{
            move.curX = Math.floor(Math.random() * 20);   
            move.curY = Math.floor(Math.random() * 20);         
        }while(squares[move.curX*cols+move.curY]);
        return move;
    }


    // Hàm xử lý khi người chơi đánh
    function handleClick(x,y){
    
        const historyCoppy = history.slice(0, stepNumber + 1);
        const current = historyCoppy[historyCoppy.length - 1];
        const squares = current.squares.slice();
        let {id, location} = current;
        
        // console.log(squares);
        // console.log(location);
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



    const playAI = (x,y) => {

        const historyByStep = history.slice(0, stepNumber + 1);
        const current = historyByStep[historyByStep.length - 1];
        const {squares,location,id} = current;

        // Kiểm tra không được đi trùng or đã có người thắng 
        if(CheckWinner(squares, location.curX, location.curY) || squares[x*cols + y]){
            return;
        }

        if(!xIsNext){
            const result = window.confirm('Bạn không được phép đi ! Bạn có muốn bot đi lại nước khác ?');
            if (result){
                const newMove = getMoveAI(squares);
                const newId = id + 1;
                const newSquare = squares.slice();
                newSquare[newMove.curX*cols + newMove.curY] = 'O';
                const newHistory = historyByStep.concat([{id: newId, squares: newSquare, location: newMove}])
                actions.handleClick(newHistory);   
            }
            return;
        }
     
        

        // Người đánh
        const squaresPlayer = squares.slice();
        squaresPlayer[x*cols + y] = 'X';
        const idPlayer = id + 1;
        const locationPlayer = {curX : x, curY : y};
        const historyPlayer = historyByStep.concat([{
            id: idPlayer, squares: squaresPlayer, location: locationPlayer
            }]);
        
        actions.handleClick(historyPlayer);  

        // Kiểm tra người thắng
        if(CheckWinner(squaresPlayer, locationPlayer.curX, locationPlayer.curY)){
            return;
        }
        

        // AI đánh
        const idAI = idPlayer + 1;
        const locationAI = getMoveAI(squares);
        const squaresAI = squaresPlayer.slice();
        squaresAI[locationAI.curX*cols + locationAI.curY] = 'O';
        let historyAI = historyPlayer.slice();
        
        historyAI = historyAI.concat([{
            id: idAI, squares:squaresAI, location:locationAI
            }]);            
        actions.handleClick(historyAI);   
    }
    
    // const playAndCheckWin = (historyByStep, squares, location, id, player) => {
    //     const squaresPlayer = squares.slice();
    //     squaresPlayer[location.curX*cols + location.curY] = player;
    //     const idPlayer = id + 1;
        
    //     const historyPlayer = historyByStep.concat([{
    //         id: idPlayer, squares: squaresPlayer, location
    //         }]);
        
    //     actions.handleClick(historyPlayer);  

    //     // Kiểm tra người thắng
    //     if(CheckWinner(squaresPlayer, location.curX, location.curY)){
    //         return;
    //     }
    // }


    // Map history với từng bước đi
    let moves = history.map((step, move) => {
        if(move > 0){
            const content = `# Đến nước thứ ${move} (${step.location.curX},${step.location.curY})`;
            const moveChose = stepNumber === move ? "btn btn-secondary" : "btn btn-light"
            
            return (
                <Button key={step.id} type = "button" className= {`${moveChose} btn-history`} onClick={() => actions.jumpTo(move)}>{content}</Button>
            );
        }
        return (<div key="0"/>);     
    });

    // Kiểm tra người chiến thắng
    let player; let status;

    const current = history[stepNumber];  
    const {location} = current;   
    const arrWin = CheckWinner(current.squares, location.curX, location.curY);

    if(arrWin){
        status = "Người chiến thắng : ";
        player = current.squares[arrWin[0]]
    }
    else if(stepNumber === 400){
        status = "Hòa nhau !" ;
    }
    else{
        player = xIsNext ? 'X' : 'O';
        status = "Người chơi kế tiếp : ";
    }

    // Thay đổi trạng thái sort
    if (!isDescending) {
        moves = moves.reverse();
    }   
    
    if(userInfo){
        return (
            <div>
                <div>
                    <div className="status">
                        <Link to ="/" className="home" ><i className="fa fa-home"/><span className="ml-10">Trang chủ</span></Link>
                        <p>{status} <span className={player==='X' ? 'playerX' : 'playerO'}><b>{player}</b></span></p>
                    </div>
                
                    <div className="game-board center">
                        <Board squares = {current.squares} onClick = { (x,y) => {playAI(x,y)}} arrWin = {arrWin} sizeOfBoard = {rows}/>
                    </div>
                    <div className="info-player">
                        <div className="mb-180">
                            <center><img src="https://www.w3schools.com/howto/img_avatar.png" alt =" Avatar" className="avatar-user" /></center>
                            <center><span className="name-player">{userInfo.fullName}</span></center>
                        </div>
                        <div>
                            <center><img src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-1-2/128/Bot-Robot-Chatbot-Tech-Profile-Automation-Avatar-512.png" alt =" Avatar" className="avatar-user" /></center>
                            <center><span className="name-player">BOT AI</span></center>
                        </div>
                    </div>
                    <div className="game-info">                   
                        <div>
                            <Button type = "button" className="button-game" onClick = {actions.resetGame} >Chơi lại</Button>
                        </div>
                        <br/>
                        <div>
                            <Button type = "button" className="button-game" onClick={actions.sortHistory}>Lịch sử đánh {isDescending  ? '↓' : '↑' }</Button>
                        </div>
                        {moves}
                    </div>
                </div>
                    
            </div>
        );
    }

    return (
        <div className = "centered">
            <center><h1>Đang tải...</h1></center>
        </div>
    )

    

}

export default Game