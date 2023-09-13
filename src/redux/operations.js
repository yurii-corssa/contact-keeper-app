import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64fde15b596493f7af7eb5ee.mockapi.io/';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContactsThunk',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', contact);
      return responce.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
  'contacts/removeContactThunk',
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
