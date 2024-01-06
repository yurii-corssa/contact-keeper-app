import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authRegister } from 'redux/auth/auth-operations';
import { Button, Flex, Heading, Spinner, Stack } from '@chakra-ui/react';
import AuthPasswordInput from 'components/Inputs/AuthPasswordInput';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import AuthNameInput from 'components/Inputs/AuthNameInput';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { selectAuthError, selectIsLoading } from 'redux/auth/auth-selectors';
import AlertError from 'components/AlertError';

const RegistrationForm = () => {
  const { deviceType } = useDevice();
  const isLoading = useSelector(selectIsLoading);
  const authError = useSelector(selectAuthError);

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

  const createTextAnimation = delay => ({
    initial: { opacity: 0, y: -20 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
        opacity: { duration: 0.3, ease: 'easeIn', delay },
      },
    },
  });

  const createFormAnimation = delay => ({
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.3, ease: 'easeIn', delay },
      },
    },
  });

  return (
    <Flex
      direction="column"
      p={14}
      justify="center"
      width="100%"
      w={deviceType !== 'desktop' ? '100%' : '50%'}
    >
      <motion.div {...createTextAnimation(0.5)}>
        <Heading size="xl" mb={10}>
          Create Account
        </Heading>
      </motion.div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <motion.div {...createFormAnimation(0.7)}>
              <AuthNameInput validateName={validateName} />
            </motion.div>
            <motion.div {...createFormAnimation(0.75)}>
              <AuthEmailInput validateEmail={validateEmail} />
            </motion.div>
            <motion.div {...createFormAnimation(0.9)}>
              <AuthPasswordInput validatePassword={validatePassword} />
            </motion.div>
            <motion.div {...createFormAnimation(0.5)}>
              {authError && <AlertError errorMessage={authError} />}
            </motion.div>
            <motion.div {...createFormAnimation(0.9)}>
              <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
                <Button
                  minW="90px"
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : 'Sign Up'}
                </Button>
                <Link to="/auth/login">I have an account.</Link>
              </Flex>
            </motion.div>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default RegistrationForm;
