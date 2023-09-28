import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'fetchAPI/fetchAPI';
// ========== U S E R S====================

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = await API.createUser(credentials);
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

export const loginUser = createAsyncThunk(
  '/users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = await API.loginUser(credentials);
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
