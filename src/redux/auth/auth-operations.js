import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from './auth-selectors';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credential);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      console.log('выход');
      return thunkAPI.rejectWithValue('No valid token');
    }

    setAuthHeader(token);
    try {
      const res = await axios.get('/users/current');
      console.log('выполнен');
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
