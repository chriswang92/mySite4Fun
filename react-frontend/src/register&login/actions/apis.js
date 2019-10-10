

import {APPNAME} from '../config';
import { post } from '../../utils/sagaUtils/restActions';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;
export const LOGIN_USER = `@@CHRISWANG/${APPNAME}/LOGIN_USER`;
export const GET_ALL_USERS = `@@CHRISWANG/${APPNAME}/GET_ALL_USERS`;
// let userId = 0;

export const getAllUsers = userInfo => ({
  type: GET_ALL_USERS,
  payload: {
    userInfo
  }
})

export const registerUser2 = userInfo => ({
  type: REGISTER_USER,
  payload: {
    // id: ++userId,
    userInfo
  }
});

export const registerUser = (
  // sessionId, 
  apiData) => 
  post(`/api/user`
  // ?sessionId=${sessionId}
  , {
    success: newRecord => ({
      type: REGISTER_USER,
      payload: { newRecord }
    }),
    // id: ++userId,
    body: apiData
  });