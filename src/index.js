import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './containers/HomeContainer'
import Login from './containers/LoginContainer'
import Register from './containers/RegisterContainer'

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(
//         thunkMiddleware, // lets dispatch() functions
//       )
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default function App(){
    return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/login">
                    <Provider store={store}>
                        <Login />
                    </Provider>
                </Route>
                <Route path="/register">
                    <Provider store={store}>
                        <Register />
                    </Provider>
                </Route>
                <Route path="/">
                    <Provider store={store}>
                        <Home />
                    </Provider>
                </Route>
             </Switch>
        </div>

      </Router>
  );
}

render( <App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
