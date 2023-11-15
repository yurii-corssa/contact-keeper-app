import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { normalizeStr } from 'utils/normalizeStr';
import { editContactThunk } from 'redux/contacts/contacts-operations';
import { Form, Formik } from 'formik';
import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import ContactNameInput from 'components/Inputs/ContactNameInput';
import ContactNumberInput from 'components/Inputs/ContactNumberInput';

export const EditContactForm = ({ id, initialValues, onClose }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const isContact = value =>
    contacts.find(
      contact =>
        normalizeStr(contact.name) === normalizeStr(value) && contact.id !== id
    );

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
    dispatch(editContactThunk({ id, name, phone }));
    actions.setSubmitting(false);
    onClose();
  };

  return (
    <Flex direction="column" paddingY="5" width="100%">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <ContactNameInput variant="outline" />
            <ContactNumberInput variant="outline" />
            <Flex justifyContent="end" gap="3" pt="5">
              <Button
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Flex>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};
