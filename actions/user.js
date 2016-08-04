export const ADD_USER               = 'ADD_USER';
export const REMOVE_USER            = 'REMOVE_USER';
export const EDIT_USER              = 'EDIT_USER';
export const USER_INCREMENT_NUMTASK = 'USER_INCREMENT_NUMTASK';
export const USER_DECREMENT_NUMTASK = 'USER_DECREMENT_NUMTASK';
export function addUser (user) {
  return {
    type: ADD_USER,
    payload: {
      id: user.id,
      name: user.name,
      username: user.username,
      age: user.age,
      numTasks: user.numTasks
    }
  }
}

export function removeUser (id) {
  return {
    type : REMOVE_USER,
    id
  }
}

export function editUser (user) {
  return {
    type: EDIT_USER,
    user
  }
}

export function userIncrementNumTasks (id) {
  return {
    type: USER_INCREMENT_NUMTASK,
    id
  }
}

export function userDecrementNumTasks (id) {
  return {
    type: USER_DECREMENT_NUMTASK,
    id
  }
}
