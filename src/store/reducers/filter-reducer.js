import { SET_FILTER } from "../constants";

const initial = {
  filter: 'ALL'
};

export default function(state = initial, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        filter
      };
    }
    default:
      return state;
  }
}
