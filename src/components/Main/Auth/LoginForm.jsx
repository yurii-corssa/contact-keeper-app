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
import { validateEmail, validatePassword } from 'utils/validateSchemas';
import { createFormAnimation, createTextAnimationTop } from 'utils/animations';

const LoginForm = () => {
  const authError = useSelector(selectAuthError);
  const { deviceType } = useDevice();

  const dispatch = useDispatch();

  const handleSubmit = async (value, actions) => {
    await dispatch(authLogin(value));
    actions.setSubmitting(false);
  };

  return (
    <Flex
      position="relative"
      direction="column"
      p={14}
      justify="center"
      w={deviceType !== 'desktop' ? '100%' : '50%'}
    >
      <motion.div {...createTextAnimationTop(0.5)}>
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
            <motion.div {...createFormAnimation(0.5)}>
              {authError && <AlertError errorMessage={authError} />}
            </motion.div>
            <motion.div {...createFormAnimation(0.9)}>
              <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
                <Button
                  minW="90px"
                  colorScheme="blue"
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Log In
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
