import AlertError from 'components/AlertError';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from 'redux/auth/auth-operations';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import AuthPasswordInput from 'components/Inputs/AuthPasswordInput';

const LoginForm = () => {
  const authError = useSelector(selectAuthError);
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
    dispatch(authLogin(value));
    actions.setSubmitting(false);
  };

  return (
    <Flex
      direction="column"
      p={14}
      minH="calc(100vh - 42px)"
      justify="center"
      width="100%"
    >
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
            <AuthEmailInput validateEmail={validateEmail} />
            <AuthPasswordInput validatePassword={validatePassword} />

            {authError && <AlertError errorMessage={authError} />}

            <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
              <Button
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
