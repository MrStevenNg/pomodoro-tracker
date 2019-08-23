import { CLEAR_HISTORY } from "../actions/types";

const INITIAL_STATE = {
    history: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_HISTORY:
            return { ...state, history: [] };
        default:
            return state;
    }
};
