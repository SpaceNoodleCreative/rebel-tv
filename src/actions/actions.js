export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILED = "REQUEST_FAILED";

export const requestStart = () => ({
  type: REQUEST_START
});
export const requestSuccess = payload => ({
  type: REQUEST_SUCCESS,
  payload: payload
});
export const requestFailed = error => ({
  type: REQUEST_FAILED,
  payload: error
});
