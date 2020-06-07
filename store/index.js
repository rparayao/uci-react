/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */

import { createStore } from 'redux';
import { ADD_SHOPPING_ITEM, ADD_COUNTRY_INFO } from "../redux/constants/action-types";

const initialState = {
  shoppingList: "aaaa",
  country: ""
};


function reducer(state = initialState, action) {
  console.log("reducer..." + JSON.stringify(action));
  if (action.type === ADD_SHOPPING_ITEM) {
    console.log("1Adding .." + JSON.stringify(action.payload));
    console.log("2Adding .." + JSON.stringify(state));
    return {...state, shoppingList: action.payload};  
  }
  if (action.type === ADD_COUNTRY_INFO) {
    console.log("1Adding .." + JSON.stringify(action.payload));
    console.log("2Adding .." + JSON.stringify(state));
    return {...state, country: action.payload};  
  }


  return state;

};
 

const initializeStore = initialState => {
  return createStore(reducer, initialState);
};
 
// exports the functionality to initialize the store
// rather than exporting the store instance
export default initializeStore;