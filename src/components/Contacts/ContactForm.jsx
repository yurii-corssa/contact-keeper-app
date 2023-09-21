import { useEffect, useState } from 'react';
// import { Form, Label } from '../ContactsBook/ContactForm/ContactForm.styled';
// import { Button } from 'components/Button/Button';
// import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { nanoid } from '@reduxjs/toolkit';
import { normalizeStr } from 'utils/normalizeStr';
import { addContactThunk } from 'redux/contacts/contacts-operations';
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

  // const contactsarr = [
  //   { name: 'John Smith', number: '+48-123-456-789' },
  //   { name: 'Jane Brown', number: '+48-132-547-698' },
  //   { name: 'Michael Clark', number: '+48-321-654-987' },
  //   { name: 'Sophia Wilson', number: '+48-213-465-879' },
  //   { name: 'James Taylor', number: '+48-312-546-978' },
  //   { name: 'Emily White', number: '+48-231-564-897' },
  //   { name: 'Robert Davis', number: '+48-413-256-789' },
  //   { name: 'Anna Jones', number: '+48-142-357-689' },
  //   { name: 'David Miller', number: '+48-421-365-978' },
  //   { name: 'Sarah Lewis', number: '+48-314-256-897' },
  // ];

  // useEffect(() => {
  //   contactsarr.map(c => dispatch(addContactThunk(c)));
  //   debugger;
  // }, []);

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
