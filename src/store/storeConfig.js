import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case 'ALTERED_MIN_NUMBER':
        return {
          ...state,
          min: action.payload
        }
      case 'ALTERED_MAX_NUMBER':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 7,
          max: 31
        }
    }
  },
  names: function (state, action) {
    return [
      'Ana',
      'Bia',
      'Clara'
    ]
  }

})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig