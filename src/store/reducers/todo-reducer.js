import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, TEST } from "../constants";
import { REHYDRATE } from 'redux-persist';

const initial = {
  todos: []
};

export default function(state = initial, action) {
  switch (action.type) {
    case REHYDRATE:
      const { todos } = action.payload.todos
      return {
        ...state,
        todos: todos
      };
    case ADD_TODO: {
      const { payload } = action;
      const { todos } = state;
      let item_id = 0
      if(todos.length > 0){
        let lastItemId = todos[todos.length - 1].id
        item_id = lastItemId > payload.id ? ++lastItemId : payload.id
      } else {
        item_id =  payload.id

      }
      const todo = {
        ...payload,
        id: item_id
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          todo
        ]
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.map(item => {
            if(item.id === id){
              item.completed = !item.completed
            }
            return item
          })
          
        ] 
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => item.id !== id)
        ] 
      };
    }
    default:
      return state;
  }
}
