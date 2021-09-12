import { createAction } from "redux-act";
import { User } from "firebase/auth";

export const authUserStart = createAction("AUTH_USER_START");
export const authUserSuccess = createAction<User>("AUTH_USER_SUCCESS");
export const authUserError = createAction<null>("AUTH_USER_ERROR");
export const resetAuthUser = createAction("RESET_AUTH_USER");
