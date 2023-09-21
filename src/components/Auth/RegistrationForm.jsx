import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authRegister } from 'redux/auth/auth-operations';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validateName = value => {
    if (!value) {
      return 'Name is required';
    }
  };
  const validateEmail = value => {
    if (!value) {
      return 'Email is required';
    }
  };
  const validatePassword = value => {
    if (!value) {
      return 'Password is required';
    }
  };
  return (
    <Flex direction="column" p={14} width="100%">
      <Heading size="xl" mb={10}>
        Create Account
      </Heading>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(value, actions) => {
          setTimeout(() => {
            dispatch(authRegister(value));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <Stack as={Form} gap={3}>
            <Field type="text" name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="Your Name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field type="email" name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="your.email@mail.com" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field type="password" name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Input {...field} />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex justifyContent="space-evenly" alignItems="center">
              <Button
                textColor="fff"
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Sign Up
              </Button>
              <Link to="/auth/login">I have an account.</Link>
            </Flex>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default RegistrationForm;
