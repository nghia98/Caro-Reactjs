import {GET_INFO_REQUEST, GET_INFO_FAILURE, GET_INFO_SUCCESS, LOG_OUT} from '../constants/ActionTypes'

const initalState = {
    isFetching: false,
    userInfo: null,
}
const home = (state = initalState, action) => {
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case GET_INFO_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
    
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userInfo: action.userInfo
            }
        case LOG_OUT:
            return {
                ...state,
                userInfo: null
            }
        
        default:
            return state;
    }
}

export default home