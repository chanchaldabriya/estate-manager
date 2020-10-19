import {
  RECEIVE_ALL_DEVELOPERS,
} from "../actions";
import { combineReducers } from "redux";

// reducer related to "state.developers"
function developers(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_DEVELOPERS:
      return [...state, ...action.devs];
    default:
      return state;
  }
}

const root = combineReducers({
  developers,
  // any more reducers acting upon different state part can be linked
});

export default root;
