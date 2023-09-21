import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contacts-operations';
import { ContactItems } from './ContactItems';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Flex direction="column" width="100%">
      <Box h="calc(100vh - 42px)" overflowY="auto">
        <ContactItems />
      </Box>
    </Flex>
  );
};

export default ContactsList;
