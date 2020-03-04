import {
  REQUEST_START,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from "../actions/actions";

const initialState = {
  show: {},
  requestPending: false,
  error: null
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        requestPending: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        show: {
          id: action.show.id,
          name: action.show.name,
          summary: action.show.summary,
          image: action.show.image,
          rating: action.show.rating,
          episodes: action.show._embedded.episodes
        },
        requestPending: false
      };
    case REQUEST_FAILED:
      return {
        ...state,
        requestPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const getShow = state => state.show;
export const getRequestPending = state => state.requestPending;
export const getError = state => state.error;

const rootReducer = showReducer;
export default rootReducer;
