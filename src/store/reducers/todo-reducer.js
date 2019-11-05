import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, TEST } from "../constants";

const initial = {
  todos: []
};

export default function(state = initial, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { payload } = action;
      console.log(state)
      return {
        ...state,
        todos: [
          ...state.todos,
          payload
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
