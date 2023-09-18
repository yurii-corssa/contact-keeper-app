import { ContactForm } from './ContactForm';
import { Contacts } from '../ContactsBook/Contacts/Contacts';
import { Filter } from '../ContactsBook/Filter/Filter';
import {
  ContactsWrapper,
  Container,
  Title,
  TitleContacts,
} from '../ContactsBook/ContactsBook.styled';
import { Flex, Heading, Text } from '@chakra-ui/react';

const ContactTools = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p={14}
      color="#fff"
      h="100%"
      w="100%"
      justify="center"
      alignItems="center"
    >
      <Heading as="h1" size="2xl" mb={5}>
        Phonebook
      </Heading>
      {/* <Text fontSize="lg" mb={2}>
        Simplicity meets efficiency. 📖
      </Text> */}
      <ContactForm />
    </Flex>
  );
};

export default ContactTools;

// <Container>
//   <Title>Phonebook</Title>
//   {/* <ContactForm />

//       <TitleContacts>Contacts</TitleContacts>
//       <ContactsWrapper>
//         <Filter />
//         <Contacts />
//       </ContactsWrapper> */}
// </Container>;
