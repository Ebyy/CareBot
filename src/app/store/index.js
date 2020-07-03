import { createStore } from "redux";
import { defaultState } from "../../mockApi/defaultState";

export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
});
