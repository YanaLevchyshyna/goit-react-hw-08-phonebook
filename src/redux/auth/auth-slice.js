import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  register,
  logOut,
  getCurrentUser,
} from 'redux/auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
