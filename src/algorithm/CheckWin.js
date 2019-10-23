const cols = 20;
const rows = 20;

function checkWinRow(squares, curX, curY){

    // if (squares[curX*cols + curY] === null)
    //      return false;

    const arrWin = Array(5).fill(null);
    arrWin[0] = curX*cols + curY;
    let count = 1;
    let yE = curY + 1;
    while(yE < cols && squares[curX*cols + curY] === squares[curX*cols + yE]){
        arrWin[count] = curX*cols + yE;
        count  += 1 ;
        yE += 1;
       
    }
    let yS = curY - 1;
    while(yS >= 0 && squares[curX*cols + curY] === squares[curX*cols + yS]){
        arrWin[count] = curX*cols + yS;
        count += 1 ;
        yS -= 1;
    }
    

    // Kiểm tra điều kiện chặn 2 đầu
    if ((yS < 0 && squares[curX*cols + yE] !== null) || (yE >= cols && squares[curX*cols + yS] !== null) || (squares[curX*cols + yE] === squares[curX*cols + yS] && squares[curX*cols + yE] !== null))
        return false;   
   
    return count === 5  ? arrWin : false;
}

function checkWinCol(squares, curX, curY){

    // if (squares[curX*cols + curY] === null)
    //     return false;

    const arrWin = Array(5).fill(null);
    arrWin[0] = curX*cols + curY;
    let count = 1;
    let xE = curX + 1;
    while(xE < rows && squares[curX*cols + curY] === squares[xE*cols + curY]){
        arrWin[count] = xE*cols + curY;
        count += 1;
        xE += 1;
    }
    let xS = curX - 1;
    while(xS >= 0 && squares[curX*cols + curY] === squares[xS*cols + curY]){
        arrWin[count] = xS*cols + curY;
        count += 1 ;
        xS -= 1;
    }

    // Kiểm tra điều kiện chặn 2 đầu
    if ((xS < 0 && squares[xE*cols + curY] !== null) || (xE >= rows && squares[xS*cols + curY] !== null) || (squares[xE*cols + curY] === squares[xS*cols + curY] && squares[xE*cols + curY] !== null))
        return false;
    return count === 5  ? arrWin : false;
}

function checkWinLeftDown(squares, curX, curY){

    // if (squares[curX*cols + curY] === null)
    //     return false;

    const arrWin = Array(5).fill(null);
    arrWin[0] = curX*cols + curY;
    let count = 1;
    let xE = curX + 1;
    let yE = curY + 1;
    while(xE <cols && yE < rows && squares[curX*cols + curY] === squares[xE*cols +yE]){
        arrWin[count] = xE*cols +yE;
        count += 1;
        xE += 1;
        yE += 1;
    }

    let xS = curX - 1;
    let yS = curY - 1;

    while(xS >= 0 && yS >= 0 && squares[curX*cols + curY] === squares[xS*cols +yS]){
        arrWin[count] = xS*cols +yS;
        count += 1;
        xS -= 1;
        yS -= 1;
    }

    // Kiểm tra điều kiện chặn 2 đầu
    if ((xE >= cols && yE >= rows && squares[xS*cols +yS] !== null) || (xS < 0 && yS < 0 && squares[xE*cols +yE] !== null) || (squares[xS*cols +yS] === squares[xE*cols +yE] && squares[xE*cols +yE] !== null))
        return false;

    return count === 5  ? arrWin : false;
}

function checkWinRighttDown(squares, curX, curY){

    // if (squares[curX*cols + curY] === null)
    //     return false;

    const arrWin = Array(5).fill(null);
    arrWin[0] = curX*cols + curY;
    let count = 1;
    let xE = curX + 1;
    let yE = curY - 1;
    while(xE <cols && yE >= 0  && squares[curX*cols + curY] === squares[xE*cols +yE]){
        arrWin[count] = xE*cols +yE;
        count += 1;
        xE += 1;
        yE -= 1;
    }

    let xS = curX - 1;
    let yS = curY + 1;

    while(xS >= 0 && yS < rows && squares[curX*cols + curY] === squares[xS*cols +yS]){
        arrWin[count] = xS*cols +yS;
        count += 1;
        xS -= 1;
        yS += 1;
    }

    // Kiểm tra điều kiện chặn 2 đầu
    if ((xE >= cols && yE < 0 && squares[xS*cols +yS] !== null) || (xS < 0 && yS >= rows && squares[xE*cols +yE] !== null) || (squares[xS*cols +yS] === squares[xE*cols +yE] && squares[xE*cols +yE] !== null))
        return false;

    return count === 5  ? arrWin : false;
}


const calculateWinner = (squares, curX, curY) => {
    
    if (checkWinRow(squares, curX, curY))
        return checkWinRow(squares, curX, curY);
    if (checkWinCol(squares, curX, curY))
        return checkWinCol(squares, curX, curY);
    if (checkWinLeftDown(squares, curX, curY))
        return checkWinLeftDown(squares, curX, curY)
    if (checkWinRighttDown(squares, curX, curY))
        return checkWinRighttDown(squares, curX, curY);
    return false;
  }

export default calculateWinner