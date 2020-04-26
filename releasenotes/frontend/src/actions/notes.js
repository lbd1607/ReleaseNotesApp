import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_NOTES, DELETE_NOTES, ADD_NOTES, GET_ERRORS } from "./types";

//Actions to initiate (HTTP requests)

// GET NOTES, dispatch action to reducer
export const getNotes = () => (dispatch, getState) => {
  axios
    .get("/api/notes/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_NOTES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE NOTES, dispatch action to reducer
export const deleteNotes = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/notes/${id}/`, tokenConfig(getState))
    .then((res) => {
      //Dispatch note deleted message when delete successful
      dispatch(createMessage({ noteDeleted: "Note deleted" }));
      dispatch({
        type: DELETE_NOTES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD NOTES, dispatch action to reducer
export const addNotes = (note) => (dispatch, getState) => {
  axios
    .post("/api/notes/", note, tokenConfig(getState))
    .then((res) => {
      //Dispatch note added message when add successful
      dispatch(createMessage({ noteAdded: "Note added" }));
      dispatch({
        type: ADD_NOTES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
