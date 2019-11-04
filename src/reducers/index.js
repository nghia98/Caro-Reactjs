import {combineReducers} from 'redux'
import game from './game'
import user from './user'
import home from './home'

const App = combineReducers({
    game,
    user,
    home
})

export default App