/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */
import { ADD_SHOPPING_ITEM, ADD_COUNTRY_INFO } from "../constants/action-types";

export function addShoppingItem(payload) {
  console.log("Adding item..." + JSON.stringify(payload))
  return { type: ADD_SHOPPING_ITEM, payload };
}

export function addCountryInfo(payload) {
  console.log("Adding country..." + JSON.stringify(payload))
  return { type: ADD_COUNTRY_INFO, payload };
}

