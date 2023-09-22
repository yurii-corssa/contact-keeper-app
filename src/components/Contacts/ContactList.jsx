import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contacts-operations';
import { ContactItems } from './ContactItems';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Flex direction="column" width="100%">
      <Box h="calc(100vh - 42px)" overflowY="auto">
        {contacts.length === 0 ? (
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Text fontSize="lg" color="gray">
              Your contact book is empty. Add your first contact!
            </Text>
          </Flex>
        ) : filteredContacts.length === 0 ? (
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Text fontSize="lg" color="gray">
              No contacts found with that name.
            </Text>
          </Flex>
        ) : (
          <Box width="100%" overflowY="auto">
            <ContactItems />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ContactsList;
