import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  loginRequest: ["params", "remember"],
  loginSuccess: ["data"],
  loginFailure: null
});

export const LoginTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  params: null,
  loading: false,
  remember: false,
  data: null
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: (state, action) =>
    state.merge({
      params: action.params,
      loading: true,
      remember: action.remember
    }),
  [Types.LOGIN_SUCCESS]: (state, action) =>
    state.merge({ data: action.data, loading: false }),
  [Types.LOGIN_FAILURE]: (state, action) => state.merge({ loading: false })
});
