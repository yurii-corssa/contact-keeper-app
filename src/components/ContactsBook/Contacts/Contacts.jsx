import { useDispatch, useSelector } from 'react-redux';
import { ContactItems } from '../../Contacts/ContactItems';
import { List } from './Contacts.styled';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';
import { Notification } from '../Notification/Notification';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/contacts-operations';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  if (!contacts.length) {
    return <Notification text="Contact book is empty" />;
  }

  if (!filteredContacts.length && filter) {
    return <Notification text="Contact with the entered name was not found!" />;
  }

  return (
    <List>
      <ContactItems filteredContacts={filteredContacts} />
    </List>
  );
};
