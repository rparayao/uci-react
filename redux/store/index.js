/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import 'regenerator-runtime/runtime'


const store = createStore(
  rootReducer,
//  applyMiddleware(sagaMiddleware)
);


export default store;