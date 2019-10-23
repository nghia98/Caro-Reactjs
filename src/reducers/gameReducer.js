const initalState = {
    history : [{
        id: 0,
        squares: Array(400).fill(null),
        location: {curX: -1, curY: -1}
    }],

    xIsNext : true, 
    stepNumber : 0,
    isDescending: true, // Tăng dần

};


const gameReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'RESET_GAME':
            return {
                ...state,
                history: initalState.history,
                xIsNext : initalState.xIsNext,
                stepNumber : initalState.stepNumber,
                isDescending: initalState.isDescending
            }
            
        case 'HANDLE_CLICK':
            return {
                ...state,
                history: action.history,
                xIsNext: !state.xIsNext,
                stepNumber: action.history.length - 1,
            }

        case 'SORT_HISTORY':
            return {
                ...state,
                isDescending : !state.isDescending,
            }

        case 'JUMPTO_STEP':
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: action.step % 2 === 0,
            }

        default:
            return state
    }

}

export default gameReducer