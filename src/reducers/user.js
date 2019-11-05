import {LOGREG_REQUEST, LOGREG_FAILURE, LOGREG_SUCCESS, LOG_OUT} from '../constants/ActionTypes'

const initalState = {
    isFetching: false,
    message: null,
    isLoggedIn: false
}

const user = (state = initalState, action) => {
    switch (action.type) {
        case LOGREG_REQUEST:
            return {
                ...state,
                isFetching: true,
                message: action.message
            }
        case LOGREG_FAILURE:
            return {
                ...state,
                isFetching: false,
                message: action.message
            }

         case LOGREG_SUCCESS:
            return {
                ...state,
                isFetching: false,
                message: action.message,
                isLoggedIn: true,
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                message: null
            }
        
        default:
            return state;
    }
}

export default user;