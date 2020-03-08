import axios from "axios";

import { GET_NOTES } from "./types";

//Actions to initiate (HTTP requests)

// GET NOTES, dispatch action to reducer
export const getNotes = () => dispatch => {
  axios
    .get("/api/notes/")
    .then(res => {
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
