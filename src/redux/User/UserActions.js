import { FETCH_USER_REQUEST } from "./UserTypes";
import { FETCH_USER_SUCCESS } from "./UserTypes";
import { FETCH_USER_FAILURE } from "./UserTypes";
import axios from "axios";
export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    // dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};