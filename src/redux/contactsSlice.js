import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  getContactsThunk,
  removeContactThunk,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const thunkActionsArr = [getContactsThunk, addContactThunk, removeContactThunk];

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
  initialState: contactsInitialState,
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
                contact => contact.id === action.payload.id
              );
              state.items.splice(index, 1);
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

export const contactsReduser = contactsSlice.reducer;
