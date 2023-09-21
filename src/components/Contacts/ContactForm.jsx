import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { normalizeStr } from 'utils/normalizeStr';
import { addContactThunk } from 'redux/contacts/contacts-operations';
import { Field, Form, Formik } from 'formik';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const isContact = value =>
    contacts.find(({ name }) => normalizeStr(name) === normalizeStr(value));

  const validateName = value => {
    if (!value) {
      return 'Name is required';
    }
  };
  const validateNumber = value => {
    if (!value) {
      return 'Number is required';
    }
  };

  const handleSubmit = ({ name, number }, actions) => {
    if (isContact(name)) {
      alert(`${name} is already to contacts`);
      actions.setSubmitting(false);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Flex direction="column" p={14} width="100%">
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <Field type="text" name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaUserAlt} color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      variant="filled"
                      placeholder="Contact Name"
                    />
                  </InputGroup>

                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field type="tel" name="number" validate={validateNumber}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.number && form.touched.number}
                >
                  <FormLabel>Number</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      variant="filled"
                      placeholder="Phone number"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
