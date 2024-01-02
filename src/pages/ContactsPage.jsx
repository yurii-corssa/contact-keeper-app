import { Flex } from '@chakra-ui/react';
import ContactsList from 'components/Main/Contacts/ContactList';
import ContactTools from 'components/Main/Contacts/ContactTools';

const ContactsPage = () => {
  return (
    <Flex flexDir={{ base: 'column', lg: 'row' }} align="center">
      <ContactTools />
      <ContactsList />
    </Flex>
  );
};

export default ContactsPage;
