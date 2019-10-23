import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import reducer from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './containers/home'
import Login from './containers/login'
import Register from './containers/register'


const store = createStore(
    reducer,
    // applyMiddleware(
    //     thunkMiddleware, // lets us dispatch() functions
    //   )
)

const App = () => {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/login">
                    <Provider store = {store}>
                        <Login />
                    </Provider>
                </Route>
                <Route path="/register">
                    <Provider store = {store}>
                        <Register />
                    </Provider>
                </Route>
                <Route path="/">
                    <Provider store = {store}>
                        <Game />
                    </Provider>
                </Route>
             </Switch>
        </div>

      </Router>
  );
}

render(App, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
