import {
  ADD_DEVELOPER,
  DELETE_DEVELOPER,
  GET_DEVELOPER,
  FETCH_ALL_DEVELOPERS,
  RECEIVE_ALL_DEVELOPERS,
} from "../actions";
import { combineReducers } from "redux";

// reducer related to "state.developers"
function developers(state = [], action) {
  debugger;
  switch (action.type) {
    // case ADD_DEVELOPER:
    //   return [...state, action.dev];
    // case DELETE_DEVELOPER:
    //   return state.filter((dev) => dev.id !== action.id);
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
