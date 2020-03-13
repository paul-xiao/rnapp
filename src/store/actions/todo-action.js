import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants';

let id = 0;
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: id++,
    title,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
