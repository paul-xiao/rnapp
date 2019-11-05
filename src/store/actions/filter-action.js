import { SET_FILTER } from '../constants'

export const changeFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter
    }
});
