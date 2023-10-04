import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'fetchAPI/fetchAPI';

// ============= U S E R S====================

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = await API.createUser(credentials);
      // After successful registration, add the token to the HTTP header
      API.setAuthHeader(newUser.token);
      console.log('==== newUser ====', newUser);
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  '/users/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const loggedUser = await API.loginUser(credentials);
      // After successful login, add the token to the HTTP header
      API.setAuthHeader(loggedUser.token);
      console.log('loggedUser===>', loggedUser);
      return loggedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const loggedOutUser = await API.logOutUser();

      // After a successful logout, remove the token from the HTTP header
      API.clearAuthHeader();
      console.log('loggedOutUser===>', loggedOutUser);
      return loggedOutUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('ERROR');
    }
    try {
      API.setAuthHeader(persistedToken);
      const currentUser = API.current();
      return currentUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
