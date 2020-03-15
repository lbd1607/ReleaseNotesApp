import { GET_ERRORS } from "../actions/types";

//Initial state for error
const initialState = {
  msg: {},
  status: null
};

//Get error type and deploy payload, else return the initial state
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
