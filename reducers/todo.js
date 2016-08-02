import {ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETED, COMPLETED_TASK} from '../actions/todo';

let initialState = [
  {id: 1, text: 'aprender redux', completed: false, duration : '15 dias', created: new Date(), user_id: 1},
  {id: 2, text: 'terminar este ejemplo react', completed: false, duration : '12 dias', created: new Date(), user_id: 2},
  {id: 3, text: 'combinar react con redux', completed: false, duration : '1 mes', created: new Date(), user_id: 1},
];

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      let task = action.payload;
      task.completed = false;
      task.created = new Date();
      return [...state, task]
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.id);
    case TOGGLE_COMPLETED:
      return state.map((task) => {
        return Object.assign({},task,{
          completed: !task.completed
        });
      });
    case COMPLETED_TASK:
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
