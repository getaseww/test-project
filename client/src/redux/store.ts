// import { createStore,applyMiddleware } from "redux";
// import { employeeReducer } from "./reducers/employeeReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = createStore(employeeReducer, composeWithDevTools(
//   ));

  import { createStore,applyMiddleware } from 'redux';
  import createSagaMiddleware from '@redux-saga/core';
  
  import { rootSaga } from './saga/rootSaga';
  import {employeeReducer} from './reducers/employeeReducers';
  
  const sagaMiddleware = createSagaMiddleware();
  
  export const store = createStore(employeeReducer,composeWithDevTools(
  applyMiddleware(sagaMiddleware)));
  
  sagaMiddleware.run(rootSaga)
  