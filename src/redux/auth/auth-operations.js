import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { resetAuthState } from './auth-slice';
import { Report } from 'notiflix';

axios.defaults.baseURL = 'https://contacts-backend-ivx4.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const createNotificationTimer = () => {
  return setTimeout(() => {
    Report.info(
      'Server Delay',
      'Please note that this project is hosted on a free server. Sometimes, requests may take longer than usual. Thank you for your patience.',
      'Okay'
    );
  }, 100);
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    const timerId = createNotificationTimer();

    try {
      const res = await axios.post('/api/auth/register', credential);
      setAuthHeader(res.data.token);

      clearTimeout(timerId);

      return res.data;
    } catch (e) {
      clearTimeout(timerId);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    const timerId = createNotificationTimer();

    try {
      const res = await axios.post('/api/auth/login', credential);
      setAuthHeader(res.data.token);

      clearTimeout(timerId);

      return res.data;
    } catch {
      const message = 'Incorrect email or password. Please try again.';

      clearTimeout(timerId);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const timerId = createNotificationTimer();

    try {
      await axios.post('/api/auth/logout');
      clearAuthHeader();
      clearTimeout(timerId);
    } catch (e) {
      clearTimeout(timerId);
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

    const timerId = createNotificationTimer();

    try {
      const res = await axios.get('/api/auth/current');

      clearTimeout(timerId);

      return res.data;
    } catch (e) {
      clearTimeout(timerId);

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
