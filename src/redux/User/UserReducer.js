import { FETCH_USER_REQUEST } from "./UserTypes";
import { FETCH_USER_SUCCESS } from "./UserTypes";
import { FETCH_USER_FAILURE } from "./UserTypes";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
