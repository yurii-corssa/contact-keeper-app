import { useState } from 'react';
// import { Form, Label } from '../ContactsBook/ContactForm/ContactForm.styled';
// import { Button } from 'components/Button/Button';
// import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { normalizeStr } from 'utils/normalizeStr';
import { addContactThunk } from 'redux/operations';
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
import { Field, Form, Formik } from 'formik';
import { authLogin } from 'redux/auth/auth-operations';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const idName = nanoid();
  const idNumber = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const submitForm = e => {
    e.preventDefault();

    formReset();
  };

  /* ---------------------------------- */

  const isContact = value =>
    contacts.find(({ name }) => normalizeStr(name) === normalizeStr(value));

  const validateName = value => {
    if (!value) {
      return 'Name is required';
    }
  };
  const validateNumber = value => {
    if (!value) {
      return 'Password is required';
    }
  };

  const handleSubmit = (value, actions) => {
    setTimeout(() => {
      console.log('submit');

      // if (isContact(name)) {
      //   alert(`${name} is already to contacts`);
      //   return;
      // }

      // dispatch(addContactThunk({ name, phone: number }));

      actions.setSubmitting(false);
    }, 1000);
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
            <Field type="tel" name="number" validate={validateName}>
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

// <Form onSubmit={submitForm}>
//       <Label htmlFor={idName}>Name</Label>
//       <Input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         value={name}
//         id={idName}
//         onChange={handleChange}
//         required
//       />
//       <Label htmlFor={idNumber}>Number</Label>
//       <Input
//         type="tel"
//         name="number"
//         pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         value={number}
//         id={idNumber}
//         onChange={handleChange}
//         required
//       />

//       <Button type="submit">Add contact</Button>
//     </Form>
