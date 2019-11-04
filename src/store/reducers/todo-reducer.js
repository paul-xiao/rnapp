import { ADD_TODO, TOGGLE_TODO } from "../constants";

const initial = {
  todos: []
};

export default function(state = initial, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title } = action.payload;
      const todo = { id: id, title: title, completed: false}
      return {
        ...state,
        todo
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
            ...state[id],
            completed: !state.byIds[id].completed
          }
      };
    }
    default:
      return state;
  }
}
