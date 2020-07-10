import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthTypes } from '../config/types';
import { API_URL } from '../config/constants';

export const authenticate = async (credentials, dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/users/token/`, credentials);
    storeData(res.data.token);
    dispatch({
      type: AuthTypes.SIGN_IN,
      token: res.data.token,
    });
  } catch (e) {
    dispatch({
      type: AuthTypes.AUTH_ERROR,
      message: 'Unable to authenticate with provided credentials',
    });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: AuthTypes.SIGN_OUT })
  clearData();
};

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('userToken', value);
  } catch (e) {
    console.log('Cannot store token', value)
  }
};

export const getUserToken = async () => {
  try {
    userToken = await AsyncStorage.getItem('userToken');
    return userToken;
  } catch (e) {
    console.log('error', e);
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch(e) {
    // clear error
  }
  console.log('Done.');
}