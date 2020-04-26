import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //Dispatch event for User loading
  dispatch({ type: USER_LOADING });

  axios
    //If user loaded successfully, dispatch USER_LOADED from auth reducer
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    //If auth error occurs, dispatch AUTH_ERROR from auth reducer
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Get token and login user
export const login = (username, password) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ username, password });

  axios
    //If user logs in successfully, post info and dispatch LOGIN_SUCCESS from auth reducer
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    //If user does not log in successfully, dispatch LOGIN_FAIL from auth reducer
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//Register user and grant token
export const register = ({ username, password, email }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ username, password, email });

  axios
    //If user registers successfully, post info and dispatch REGISTER_SUCCESS from auth reducer
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    //If user does register successfully, dispatch REGISTER_FAIL from auth reducer
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Log out user
export const logout = () => (dispatch, getState) => {
  axios
    //If user logged out successfully, dispatch LOGOUT_SUCCESS from auth reducer
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    //If auth error occurs, dispatch AUTH_ERROR from auth reducer
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//Setup config with token helper function
export const tokenConfig = (getState) => {
  //Get token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token exists, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
