export const ADD_TASK          = 'ADD_TASK';
export const REMOVE_TASK       = 'REMOVE_TASK';
export const TOGGLE_COMPLETED  = 'TOGGLE_COMPLETED';
export const COMPLETED_TASK    = 'COMPLETED_TASK';
export const REMOVE_USER_TASKS = 'REMOVE_USER_TASKS';

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

export function toggleCompleted() {
  return {
    type: TOGGLE_COMPLETED
  }
}

export function completedTask(id) {
  return {
    type: COMPLETED_TASK,
    id
  }
}

export function removeUserTasks(idUser) {
  return {
    type : REMOVE_USER_TASKS,
    idUser
  }
}
