import { createReducer } from "redux-act";
import { User } from "firebase/auth";
import initialState from "./state";
import {
  authUserStart,
  authUserSuccess,
  authUserError,
  resetAuthUser,
} from "./actions";
import { AuthStateType } from "./types";

export const onAuthUserStart = (state: AuthStateType, payload: User) => ({
  ...state,
  isLoading: true,
});

export const onAuthUserSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onAuthUserError = (state: AuthStateType, payload: null) => ({
  ...initialState,
  error: payload,
});

export const onResetAuthUser = (state: AuthStateType) => ({
  ...initialState,
});

export const authReducer = createReducer<AuthStateType>({}, initialState)
  .on(authUserStart, onAuthUserStart)
  .on(authUserSuccess, onAuthUserSuccess)
  .on(authUserError, onAuthUserError)
  .on(resetAuthUser, onResetAuthUser);

export default authReducer;
