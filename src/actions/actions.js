// action types
export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILED = "REQUEST_FAILED";

// action creators
export const requestStart = () => ({
  type: REQUEST_START
});
export const requestSuccess = payload => ({
  type: REQUEST_SUCCESS,
  show: payload
});
export const requestFailed = error => ({
  type: REQUEST_FAILED,
  error
});

// utils
export const getRandomId = () => {
  const max = 46513;
  const randomId = Math.floor(Math.random() * (max - 1) + 1);
  return randomId;
};

export const fetchShow = id => {
  return dispatch => {
    dispatch(requestStart());
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(data => {
        return data.name !== "Not found"
          ? dispatch(requestSuccess(data))
          : dispatch(requestFailed(data.name));
      })
      .catch(error => dispatch(requestFailed(error)));
  };
};

export const listKeys = function(xs, key) {
  const obj = xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  return Object.keys(obj);
};

export const groupByKey = function(xs, key) {
  const obj = xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  return Object.values(obj);
};
