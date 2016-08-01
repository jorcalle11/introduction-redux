import {ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETED, COMPLETED_TASK} from '../actions/todo';
import {ADD_USER, REMOVE_USER} from '../actions/user';

let initialState = {
  tasks: [
    {id: 1, text: 'aprender redux', completed: false, duration : '15 dias', created: new Date(), user_id: 1},
    {id: 2, text: 'terminar este ejemplo react', completed: false, duration : '12 dias', created: new Date(), user_id: 2},
    {id: 3, text: 'combinar react con redux', completed: false, duration : '1 mes', created: new Date(), user_id: 1},
  ],
  users: [
    {id: 1, name: {first: 'Jorge', last: 'Calle'}, age: 24, numTasks: 2, username: '@jomaca11'},
    {id: 2, name: {first: 'Nicole', last: 'Calle'}, age: 2, numTasks: 1, username: '@nicole05'}
  ]
};

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      let task = action.payload;
      task.completed = false;
      task.created = new Date();
      return Object.assign({},state,{
        tasks: state.tasks.concat([task])
      });
    case REMOVE_TASK:
      return Object.assign({},state,{
        tasks: state.tasks.filter((task) => task.id !== action.id)
      });
    case TOGGLE_COMPLETED:
      return Object.assign({},state,{
        tasks: state.tasks.map((task) => {
          return Object.assign({},task, {
            completed: !task.completed
          });
        })
      });
    case COMPLETED_TASK:
      return Object.assign({},state,{
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return Object.assign({},task, {
              completed: !task.completed
            });
          }
          return task;
        })
      })
      break;
    case ADD_USER:
      let user = action.payload;
      return Object.assign({},state,{
        users: state.users.concat([user])
      });
    case REMOVE_USER:
      return Object.assign({},state,{
        users: state.users.filter((user) => user.id !== action.id)
      });
    default:
      return state;
  }
}

export default todoReducer;
