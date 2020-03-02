import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from "../actions/actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
