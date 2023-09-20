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
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from 'redux/auth/auth-operations';

const LoginForm = () => {
  const dispatch = useDispatch();

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

  const handleSubmit = (value, actions) => {
    setTimeout(() => {
      dispatch(authLogin(value));
      actions.setSubmitting(false);
    }, 1000);
  };
  return (
    <Flex direction="column" p={14} width="100%">
      <Heading size="xl" mb={10}>
        Sign in
      </Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {props => (
          <Stack as={Form} gap={3}>
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
                Login
              </Button>
              <Link to="/auth/sign-up">Sign Up</Link>
            </Flex>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default LoginForm;