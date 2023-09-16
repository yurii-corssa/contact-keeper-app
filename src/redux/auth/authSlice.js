import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authLogin, authLogout, authRegister } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authRegister.pending, state => state)
      .addCase(authRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authRegister.rejected, state => state)
      .addCase(authLogin.pending, state => state)
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogin.rejected, state => state)
      .addCase(authLogout.pending, state => state)
      .addCase(authLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authLogout.rejected, state => state);
  },
});

export const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'auth',
  storage,
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
