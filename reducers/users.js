import {ADD_USER, REMOVE_USER} from '../actions/user';

let initialState = [
  {id: 1, name: 'Jorge Calle', age: 24, numTasks: 2, username: '@jomaca11'},
  {id: 2, name: 'Nicole Calle', age: 2, numTasks: 1, username: '@nicole05'}
];

function usersReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.id);
    default:
    return state;
  }
}

export default usersReducer;
