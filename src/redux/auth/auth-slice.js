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
  isLoading: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isRefreshing = false;
  state.isLoading = false;
};

const handleRejected = (state, { error }) => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, handlePending)
      .addCase(authRegister.rejected, handleRejected)
      .addCase(authRegister.fulfilled, handleFulfilled)
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
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
        state.isLoading = false;
      })
      .addCase(authRefresh.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(authRefresh.rejected, (state, { error }) => {
        state.isRefreshing = false;
        state.error = error.message;
      })
      .addCase(authRefresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isRefreshing = false;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
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
