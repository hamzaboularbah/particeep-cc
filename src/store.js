import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
