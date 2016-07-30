import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counter';

function counterReducer (state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.increment;
    case DECREMENT_COUNTER:
      return state - action.decrement;
    default:
      return state;
  }
}

export default counterReducer;
