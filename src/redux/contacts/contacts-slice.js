import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  addContactThunk,
  editContactThunk,
  getContactsThunk,
  removeContactThunk,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const thunkActionsArr = [
  getContactsThunk,
  addContactThunk,
  removeContactThunk,
  editContactThunk,
];

const getThunkStatusActions = status => thunkActionsArr.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(...getThunkStatusActions('fulfilled')),
        (state, action) => {
          state.isLoading = false;
          state.error = null;

          switch (action.type) {
            case getContactsThunk.fulfilled.type:
              state.items = action.payload;
              break;

            case addContactThunk.fulfilled.type:
              state.items.push(action.payload);
              break;

            case removeContactThunk.fulfilled.type:
              const index = state.items.findIndex(
                contact => contact.id === action.payload
              );
              state.items.splice(index, 1);
              break;

            case editContactThunk.fulfilled.type:
              const i = state.items.findIndex(
                contact => contact.id === action.payload.id
              );
              state.items.splice(i, 1, action.payload);
              break;

            default:
              break;
          }
        }
      )
      .addMatcher(isAnyOf(...getThunkStatusActions('pending')), handlePending)
      .addMatcher(
        isAnyOf(...getThunkStatusActions('rejected')),
        handleRejected
      );
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
