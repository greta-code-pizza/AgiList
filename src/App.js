import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore } from "redux";

import { userReducer } from './Reducers/userReducer';
import { tasksReducer } from './Reducers/tasksReducer';

import LoginContainer from './Containers/LoginContainer';
import TasksContainer from './Containers/TasksContainer';

import './style.scss';

const store = 
  createStore(combineReducers({
    userReducer: userReducer,
    tasksReducer: tasksReducer
  }));

render(
  <Provider store={store} >
    <LoginContainer />
    <TasksContainer />
  </Provider>,
  document.getElementById('wrapper')
)
