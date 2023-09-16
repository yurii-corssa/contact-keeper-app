import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import {
  ContactsWrapper,
  Container,
  Title,
  TitleContacts,
} from './ContactsBook.styled';

export const ContactsBook = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      {/* <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
      <ContactsWrapper>
        <Filter />
        <Contacts />
      </ContactsWrapper> */}
    </Container>
  );
};
