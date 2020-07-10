import { AuthState, AuthActions, AuthTypes } from '../config/types';

export const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case AuthTypes.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };

    case AuthTypes.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };

    case AuthTypes.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };

    case AuthTypes.AUTH_ERROR:
      return {
        ...state,
        errMessage: action.message
      };

    default:
      return state;
  }
};
