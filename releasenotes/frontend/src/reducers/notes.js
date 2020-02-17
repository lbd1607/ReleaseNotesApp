import { GET_NOTES } from "../actions/types.js";

const initialState = {
  notes: []
};

//Export state, send notes as payload in action
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload
      };
    default:
      return state;
  }
}
