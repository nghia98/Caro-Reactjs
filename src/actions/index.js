export const resetGame = () => ({
    type: 'RESET_GAME',
    
})

export const jumpTo = (step) => ({
    type: 'JUMPTO_STEP',
    step
})

export const sortHistory = ()  => ({
    type: 'SORT_HISTORY'
})

export const handleClick = (history) => ({
    type: 'HANDLE_CLICK',
    history
})