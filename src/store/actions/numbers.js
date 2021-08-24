// action creator
export function alterMinNumber(newNumber) {
  return {
    type: 'ALTERED_MIN_NUMBER',
    payload: newNumber
  }
}

export function alterMaxNumber(newNumber) {
  return {
    type: 'ALTERED_MAX_NUMBER',
    payload: newNumber
  }
}