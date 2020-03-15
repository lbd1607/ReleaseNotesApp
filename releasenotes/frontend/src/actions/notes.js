import axios from "axios";
import { createMessage } from "./messages";

import { GET_NOTES, DELETE_NOTES, ADD_NOTES, GET_ERRORS } from "./types";

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
      //Dispatch note deleted message when delete successful
      dispatch(createMessage({ noteDeleted: "Note deleted" }));
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
      //Dispatch note added message when add successful
      dispatch(createMessage({ noteAdded: "Note added" }));
      dispatch({
        type: ADD_NOTES,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
