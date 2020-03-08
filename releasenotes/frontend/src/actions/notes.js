import axios from "axios";

import { GET_NOTES, DELETE_NOTES, ADD_NOTES } from "./types";

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

// DELETE NOTES, dispatch action to reducer
export const deleteNotes = id => dispatch => {
  axios
    .delete(`/api/notes/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_NOTES,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD NOTES, dispatch action to reducer
export const addNotes = note => dispatch => {
  axios
    .post("/api/notes/", note)
    .then(res => {
      dispatch({
        type: ADD_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
