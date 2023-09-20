import { Flex } from '@chakra-ui/react';
import ContactsList from 'components/Contacts/ContactList';
import ContactTools from 'components/Contacts/ContactTools';

const ContactsPage = () => {
  return (
    <Flex height="100vh">
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <ContactTools />
      <ContactsList />
    </Flex>
  );
};

export default ContactsPage;
