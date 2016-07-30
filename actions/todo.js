export const ADD_TASK     = 'ADD_TASK';
export const REMOVE_TASK  = 'REMOVE_TASK';
export const EDIT_TASK    = 'EDIT_TASK';

export function addTask (task) {
  return {
    type: ADD_TASK,
    payload: {
      id: task.id,
      text: task.text,
      duration : task.duration,
      user_id: task.user_id
    }
  }
}

export function removeTask (id) {
  return {
    type: REMOVE_TASK,
    id
  }
}

export function editTask (task) {
  return {
    type: EDIT_TASK,
    task
  }
}
