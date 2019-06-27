import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

/**
 * Types & Creators
 */
const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['data'],
  logout: null,
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  data: {},
  signedIn: !!localStorage.getItem('@DonJuan:token'),
  token: localStorage.getItem('@DonJuan:token') || null,
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
});
