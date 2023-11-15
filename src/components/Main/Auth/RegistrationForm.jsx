import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authRegister } from 'redux/auth/auth-operations';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import AuthPasswordInput from 'components/Inputs/AuthPasswordInput';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import AuthNameInput from 'components/Inputs/AuthNameInput';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validateName = value => {
    if (!value) {
      return 'Name is required';
    }

    if (value.length < 3) {
      return 'Name should be at least 3 characters long';
    }

    if (value.length > 50) {
      return 'Name should not exceed 50 characters';
    }
  };

  const validateEmail = value => {
    if (!value) {
      return 'Email is required';
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(value)) {
      return 'Invalid email format';
    }
  };

  const validatePassword = value => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 8) {
      return 'Password should be at least 8 characters long';
    }
    if (value.length > 50) {
      return 'Password should not exceed 50 characters';
    }
  };

  const handleSubmit = (value, actions) => {
    dispatch(authRegister(value));
    actions.setSubmitting(false);
  };

  return (
    <Flex direction="column" p={14} justify="center" width="100%">
      <Heading size="xl" mb={10}>
        Create Account
      </Heading>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <AuthNameInput validateName={validateName} />
            <AuthEmailInput validateEmail={validateEmail} />
            <AuthPasswordInput validatePassword={validatePassword} />

            <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
              <Button
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
