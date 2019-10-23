
const initalState = {
    isFetching: false,
    didInvalidate: false,
    user: null,
}
export default function handleGetInfo(state = initalState, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            if (action.status === 'REQUEST') {
                return {
                    ...state,
                    isFetching: true,
                    didInvalidate: false,
                    user: null,
                }
            }
            if (action.status === 'FAILED') {
                return {
                    ...state,
                    isFetching: false,
                    didInvalidate: true,
                    user: null
                }
            }
            if (action.status === 'SUCCESS') {
                return {
                    ...state,
                    isFetching: false,
                    didInvalidate: false,
                    user: action.user
                }
            }
            
                return state;
            
        
        default:
            return state;
    }
}