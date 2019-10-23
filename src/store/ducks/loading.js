import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  showLoading: null,
  hideLoading: null
});

export const LoadingTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  visible: false
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_LOADING]: (state, action) =>
    state.merge({
      visible: true
    }),
  [Types.HIDE_LOADING]: (state, action) => state.merge({ visible: false })
});
