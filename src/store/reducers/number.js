
const initialState = {
  min: 1,
  max: 10
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
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
      return state
  }
}