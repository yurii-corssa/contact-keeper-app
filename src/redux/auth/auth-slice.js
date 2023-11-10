import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
} from './auth-operations';

const initialState = {
  user: { username: null, email: null },
  token: null,
  error: null,
  isRefreshing: false,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isRefreshing = false;
};

const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, handlePending)
      .addCase(authRegister.rejected, handleRejected)
      .addCase(authRegister.fulfilled, handleFulfilled)
      .addCase(authLogin.pending, state => {
        state.error = null;
      })
      .addCase(authLogin.rejected, handleRejected)
      .addCase(authLogin.fulfilled, handleFulfilled)
      .addCase(authLogout.pending, handlePending)
      .addCase(authLogout.rejected, handleRejected)
      .addCase(authLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isRefreshing = false;
      })
      .addCase(authRefresh.pending, handlePending)
      .addCase(authRefresh.rejected, handleRejected)
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
