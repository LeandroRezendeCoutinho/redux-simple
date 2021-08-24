import { createStore, combineReducers } from "redux";
import reducerNumbers from "./reducers/number";

const reducers = combineReducers({
  numbers: reducerNumbers,
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig