import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  showError: ["message"],
  hideError: null
});

export const ErrorTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  message: "",
  visible: false
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_ERROR]: (state, action) =>
    state.merge({
      message: action.message,
      visible: true
    }),
  [Types.HIDE_ERROR]: (state, action) => state.merge({ visible: false })
});
