import { Flex } from '@chakra-ui/react';
import { ContactForm } from 'components/Contacts/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import ContactTools from 'components/Contacts/ContactTools';

const ContactsPage = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="space-evenly">
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <ContactTools />
      <ContactList />
    </Flex>
  );
};

export default ContactsPage;
