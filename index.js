/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import MovieContainer from './containers/MovieContainer';
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <MovieContainer/>
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
