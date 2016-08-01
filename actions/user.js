export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

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
    type : ADD_USER,
    id
  }
}
