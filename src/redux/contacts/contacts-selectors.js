import { createSelector } from '@reduxjs/toolkit';
import { normalizeStr } from 'utils/normalizeStr';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      normalizeStr(name).includes(normalizeStr(filterValue))
    );
  }
);
