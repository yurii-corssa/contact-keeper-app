import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { normalizeStr } from 'utils/normalizeStr';
import { addContactThunk } from 'redux/contacts/contacts-operations';
import { Form, Formik } from 'formik';
import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import ContactNameInput from 'components/Inputs/ContactNameInput';
import ContactNumberInput from 'components/Inputs/ContactNumberInput';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const initialValues = { name: '', phone: '' };

  const isContact = value =>
    contacts.find(({ name }) => normalizeStr(name) === normalizeStr(value));

  const handleSubmit = ({ name, phone }, actions) => {
    if (isContact(name)) {
      toast({
        title: 'Duplicate Contact',
        description: `"${name}" is already in contacts.`,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      actions.setSubmitting(false);
      return;
    }
    dispatch(addContactThunk({ name, phone }));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Flex direction="column" maxW="380px" paddingY="5" width="100%">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <ContactNameInput variant="filled" />
            <ContactNumberInput variant="filled" />
            <Button
              textColor="fff"
              colorScheme="blue"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Add contact
            </Button>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};