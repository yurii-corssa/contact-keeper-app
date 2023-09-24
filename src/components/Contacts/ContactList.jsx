import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/contacts-operations';
import { ContactItems } from './ContactItems';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/contacts-selectors';
import NoContactNotice from './NoContactNotice';
import NoFilterContactNotice from './NoFilterContactNotice';
import ModalWindow from 'components/ModalWindow';
import { EditContactForm } from './EditContactForm';

const ContactsList = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleOpenModal = (inputId, inputName, inputNumber) => {
    setId(inputId);
    setName(inputName);
    setNumber(inputNumber);
    onOpen();
  };

  return (
    <>
      <Flex direction="column" width="100%">
        <Box h="calc(100vh - 42px)" overflowY="auto">
          {contacts.length === 0 ? (
            <NoContactNotice />
          ) : filteredContacts.length === 0 ? (
            <NoFilterContactNotice />
          ) : (
            <ContactItems handleOpenModal={handleOpenModal} />
          )}
        </Box>
      </Flex>
      <ModalWindow isOpen={isOpen} onClose={onClose} title="Edit Contact">
        <EditContactForm
          id={id}
          initialValues={{ name, number }}
          onClose={onClose}
        />
      </ModalWindow>
    </>
  );
};

export default ContactsList;
