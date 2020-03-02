import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware([thunk])
  );
  return store;
};
