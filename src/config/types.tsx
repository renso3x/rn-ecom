import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

// Context Reducer
export type AuthType = {
  userToken: string;
  isLoading: boolean;
  isSignout: boolean;
  errMessage: boolean;
};

export type InitialStateType = {
  auth: AuthType;
};

// Auth
export enum AuthTypes {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
  AUTH_ERROR,
}

export type AuthActions =
 | { type: AuthTypes.RESTORE_TOKEN, token: string }
 | { type: AuthTypes.SIGN_IN, token: string }
 | { type: AuthTypes.SIGN_OUT }
 | { type: AuthTypes.AUTH_ERROR, message: string }

export type AuthState = AuthType;