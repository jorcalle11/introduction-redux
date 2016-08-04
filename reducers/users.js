import {ADD_USER, EDIT_USER, REMOVE_USER, USER_INCREMENT_NUMTASK, USER_DECREMENT_NUMTASK} from '../actions/user';

let initialState = [
  {id: 1, name: 'Jorge Calle', age: 24, numTasks: 2, username: '@jomaca11'},
  {id: 2, name: 'Nicole Calle', age: 2, numTasks: 1, username: '@nicole05'}
];

function usersReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case REMOVE_USER:
      return state.filter((user) => user.id !== action.id);

    case EDIT_USER:
      return state.map((user) => {
        if (user.id === action.user.id) {
          return Object.assign({},user,action.user);
        }
        return user;
      });

    case USER_INCREMENT_NUMTASK:
      return state.map((user) => {
        if (user.id === action.id) {
          return Object.assign({},user,{
            numTasks: ++user.numTasks
          });
        }
        return user;
      })

    case USER_DECREMENT_NUMTASK:
      return state.map((user) => {
        if (user.id === action.id) {
          return Object.assign({},user,{
            numTasks: --user.numTasks
          });
        }
        return user;
      })

    default:
    return state;
  }
}

export default usersReducer;
