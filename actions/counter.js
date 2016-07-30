export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter (increment) {
  return {
    type : INCREMENT_COUNTER,
    increment
  }
}

export function decrementCounter (decrement) {
  return {
    type : DECREMENT_COUNTER,
    decrement
  }
}
