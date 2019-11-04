import { ALL, PENDING, DONE } from "../constants";

const initial = {
  filter: 'All'
};

export default function(state = initial, action) {
  switch (action.type) {
    case ALL: {
      const { id, title } = action.payload;
      const todo = { id: id, title: title, completed: false}
      return {
        ...state,
        todo
      };
    }
    case PENDING: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
            ...state[id],
            completed: !state.byIds[id].completed
          }
      };
    }
    case DONE: {
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
