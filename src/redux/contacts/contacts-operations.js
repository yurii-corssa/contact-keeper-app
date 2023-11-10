import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContactsThunk',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/contacts');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/api/contacts', contact);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
  'contacts/removeContactThunk',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/editContactThunk',
  async ({ id, name, phone }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/contacts/${id}`, { name, phone });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
