import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { resetAuthState } from './auth-slice';

axios.defaults.baseURL = 'https://contacts-backend-ivx4.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/register', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch {
      const message = 'Incorrect email or password. Please try again.';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue(null);
    }

    setAuthHeader(token);
    try {
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (e) {
      if (e.response.status === 401) {
        clearAuthHeader();
        thunkAPI.dispatch(resetAuthState());
        return thunkAPI.rejectWithValue(
          'Your session has expired. Please log in again.'
        );
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
