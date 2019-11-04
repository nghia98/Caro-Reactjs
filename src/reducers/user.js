import {LOGREG_REQUEST, LOGREG_FAILURE, LOGREG_SUCCESS} from '../constants/ActionTypes'

const initalState = {
    isFetching: false,
    message: null,
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
            }
              
        default:
            return state;
    }
}

export default user;