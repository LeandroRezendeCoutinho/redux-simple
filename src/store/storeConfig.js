import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case 'ALTERED_MIN_NUMBER':
        return {
          ...state,
          min: action.payload
        }

      default:
        return {
          min: 7,
          max: 31
        }
    }
  },
  names: function (state, action) {
    console.log('Names reducer');
    console.log(state, ' ', action);
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