import {GET_INFO_REQUEST, GET_INFO_FAILURE, GET_INFO_SUCCESS} from '../constants/ActionTypes'

const initalState = {
    isFetching: false,
    notLogin: true,
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
                notLogin: false,
                userInfo: action.userInfo
            }
        
        default:
            return state;
    }
}

export default home