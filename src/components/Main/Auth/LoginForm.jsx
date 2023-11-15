import AlertError from 'components/AlertError';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from 'redux/auth/auth-operations';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import AuthPasswordInput from 'components/Inputs/AuthPasswordInput';
import { motion } from 'framer-motion';
import { useDevice } from 'deviceContext';

const LoginForm = () => {
  const authError = useSelector(selectAuthError);
  const { deviceType } = useDevice();

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
      position="relative"
      direction="column"
      p={14}
      justify="center"
      w={deviceType !== 'desktop' ? '100%' : '50%'}
    >
      <motion.div {...createTextAnimation(0.5)}>
        <Heading size="xl" mb={10}>
          Sign in
        </Heading>
      </motion.div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {props => (
          <Stack as={Form} gap={3}>
            <motion.div {...createFormAnimation(0.7)}>
              <AuthEmailInput validateEmail={validateEmail} />
            </motion.div>
            <motion.div {...createFormAnimation(0.75)}>
              <AuthPasswordInput validatePassword={validatePassword} />
            </motion.div>
            <motion.div {...createFormAnimation(0.9)}>
              {authError && <AlertError errorMessage={authError} />}
            </motion.div>
            <motion.div {...createFormAnimation(0.9)}>
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
            </motion.div>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default LoginForm;
