import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes'

export const resetGame = () => ({
    type: types.RESET_GAME,
    
})

export const jumpTo = (step) => ({
    type: types.JUMPTO_STEP,
    step
})

export const sortHistory = ()  => ({
    type: types.SORT_HISTORY
})

export const handleClick = (history) => ({
    type: types.HANDLE_CLICK,
    history
})

export const logRegRequest = (message) => {
    return {
        type: types.LOGREG_REQUEST,
        message
    };
}

export const logRegFailure = (message) => {
    return {
        type: types.LOGREG_FAILURE,
        message
    };
}

export const logRegSuccess = (message) => {
    return {
        type: types.LOGREG_SUCCESS,
        message
    };
}

export const fetchLogin = (email, password) => {

    return dispatch => {
  
        dispatch(logRegRequest('Đang đăng nhập... Vui lòng đợi trong giây lát ! '));

        return fetch('https://restfull-api-1612424.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(
            response => response.json(),
            error => {
                dispatch(logRegFailure(`Đã xảy ra lỗi : ${  error}`));
            }
        )
        .then(json => {
            if (json.token) {
                localStorage.setItem('token', json.token);
                dispatch(logRegSuccess('Đăng nhập thành công !'));         
            }
            else {
                dispatch(logRegFailure(json.message));
            }
        })
    }
}


export const fetchRegister = (email, password, fullName) => {

    return dispatch => {

        dispatch(logRegRequest('Đang đăng kí... Vui lòng đợi trong giây lát ! '));

        return fetch('https://restfull-api-1612424.herokuapp.com/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                fullName, 
            })
        })
        .then(
            response => response.json(),
        )
        .then(json => {
            if (json.err)
                dispatch(logRegFailure(json.err));
            else{
                dispatch(logRegSuccess(json.message));
                setTimeout( () => {window.location.href="/login"}, 2000);
            }
            
        })
    }
  }

export const getInfoRequest = () => {
    return {
        type: types.GET_INFO_REQUEST
    };
}

export const getInfoFailure = () => {
    return {
        type: types.GET_INFO_FAILURE
    };
}
export const getInfoSuccess = (userInfo) => {
    return {
        type: types.GET_INFO_SUCCESS,
        userInfo
    };
}

export const fetchInfoUser = (token) => {

    return dispatch => {
  
        dispatch(getInfoRequest());

        const bearerToken = `Bearer ${  token}`;

        return fetch('https://restfull-api-1612424.herokuapp.com/me', {
            method: 'GET',
            headers: {
                'Authorization': bearerToken
            }
        })
        .then(
            response => response.json(),
            error => {
                console.log(error);
                dispatch(getInfoFailure());
            }
        )
        .then(json => {
            dispatch(getInfoSuccess(json));
        })
        .catch(err => {
            console.log(err);
            dispatch(getInfoFailure());
        })
    }
  }

export const logOut = () => {
    return {
         type: types.LOG_OUT
    };
}