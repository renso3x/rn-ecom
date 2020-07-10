import * as React from 'react';
import { authReducer } from './reducer';
import { InitialStateType, AuthActions } from '../config/types';

const initialState = {
  auth: {
    userToken: '',
    isLoading: true,
    isSignout: false,
    errMessage: '',
  },
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ auth }, action) => ({
  auth: authReducer(auth, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

