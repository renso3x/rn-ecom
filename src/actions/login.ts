import AsyncStorage from '@react-native-community/async-storage';
import { AuthTypes } from '../types';

export const authenticate = (dispatch) => {
  storeData('sample-token');
  dispatch({
    type: AuthTypes.SIGN_IN,
    token: 'sample-token',
  });
};

export const logout = (dispatch) => {
  dispatch({ type: AuthTypes.SIGN_OUT })
  clearData();
};

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('userToken', value)
  } catch (e) {
    // saving error
  }
}

export const getUserToken = async () => {
  try {
    userToken = await AsyncStorage.getItem('userToken');
    return userToken;
  } catch (e) {
    console.log('error', e)
  }
}

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch(e) {
    // clear error
  }
  console.log('Done.')
}