import * as todo from '../actions/todo';

let initialState = [
  {id: 1, text: 'Aprender redux', completed: false, duration : '15 dias', created: new Date(), user_id: 1},
  {id: 2, text: 'Terminar este ejemplo', completed: false, duration : '12 dias', created: new Date(), user_id: 2},
  {id: 3, text: 'Combinar react con redux', completed: false, duration : '1 mes', created: new Date(), user_id: 1},
];

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case todo.ADD_TASK:
      let task = action.payload;
      task.completed = false;
      task.created = new Date();
      return [...state, task]

    case todo.REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);

    case todo.REMOVE_USER_TASKS:
      return state.filter((task) => task.user_id !== action.idUser);

    case todo.TOGGLE_COMPLETED:
      return state.map((task) => {
        return Object.assign({},task,{
          completed: !task.completed
        });
      });

    case todo.COMPLETED_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({},task,{
            completed: !task.completed
          });
        }
      return task;
    });

    default:
      return state;
  }
}

export default todoReducer;
