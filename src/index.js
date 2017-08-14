import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";

import login from "./reducers/login.js";

import {BrowserRouter as Router,Route} from 'react-router-dom';

import App from './App';
import "./index.scss";

const store = createStore(combineReducers({login}));

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Route path="/" component={App}></Route>
  </Router>
</Provider>, document.getElementById('root'));
