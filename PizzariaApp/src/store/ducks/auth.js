import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

/**
 * Types & Creators
 */
const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['data'],
  logout: null,
  initCheckSuccess: null,
  registerRequest: ['name', 'email', 'password'],
  registerSuccess: ['data'],
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  data: {},
  authChecked: false,
  signedIn: false,
  token: null,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: (state, { data }) => state.merge({
    signedIn: true,
    data,
    token: data.token,
    isAdmin: data.user.admin,
  }),
  [Types.LOGOUT]: state => state.merge({ signedIn: false, token: null }),
  [Types.INIT_CHECK_SUCCESS]: state => state.merge({ authChecked: true }),
  [Types.REGISTER_SUCCESS]: (state, { data }) => state.merge({ data }),
});
