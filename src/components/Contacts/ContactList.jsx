import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from 'redux/auth/auth-selectors';
import { getContactsThunk } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';
import { ContactItems } from './ContactItems';

const ContactsList = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const contacts = useSelector(selectContacts);
  //   const filterValue = useSelector(selectFilter);
  //   const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  //   console.log(contacts);

  return (
    <Flex direction="column" width="100%">
      {/* <Heading size="xl" mb={10}>
        Contacts
      </Heading> */}
      <Box maxHeight="100vh" overflowY="auto">
        <ContactItems />
      </Box>
    </Flex>
  );
};

export default ContactsList;
