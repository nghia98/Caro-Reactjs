import {combineReducers} from 'redux'
import gameReducer from './gameReducer'
import userReducer from './userReducer'
import homeReducer from './homeReducer'

const App = combineReducers({
    gameReducer,
    userReducer,
    homeReducer
})

export default App