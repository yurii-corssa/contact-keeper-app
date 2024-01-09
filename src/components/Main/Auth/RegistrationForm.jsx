import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authRegister } from 'redux/auth/auth-operations';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import AuthPasswordInput from 'components/Inputs/AuthPasswordInput';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import AuthNameInput from 'components/Inputs/AuthNameInput';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { selectAuthError } from 'redux/auth/auth-selectors';
import AlertError from 'components/AlertError';
import { createFormAnimation, createTextAnimationTop } from 'utils/animations';
import {
  validateEmail,
  validateName,
  validatePassword,
} from 'utils/validateSchemas';

const RegistrationForm = () => {
  const { deviceType } = useDevice();
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (value, actions) => {
    const res = await dispatch(authRegister(value));

    if (res.type === 'auth/register/fulfilled') {
      navigate('/confirmation');
    }

    actions.setSubmitting(false);
  };

  return (
    <Flex
      direction="column"
      p={14}
      justify="center"
      width="100%"
      w={deviceType !== 'desktop' ? '100%' : '50%'}
    >
      <motion.div {...createTextAnimationTop(0.5)}>
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
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Sign Up
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
