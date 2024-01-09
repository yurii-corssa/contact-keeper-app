import { Button } from '@chakra-ui/button';
import { Flex, Heading, Stack } from '@chakra-ui/layout';
import AlertError from 'components/AlertError';
import AuthEmailInput from 'components/Inputs/AuthEmailInput';
import { useDevice } from 'deviceContext';
import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { resendVerifyEmail } from 'redux/auth/auth-operations';
import { createFormAnimation, createTextAnimationTop } from 'utils/animations';
import { validateEmail } from 'utils/validateSchemas';

const ResendEmail = () => {
  const [sendError, setSendError] = useState(null);

  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';
  const navigate = useNavigate();

  const handleSubmit = async (value, actions) => {
    try {
      await resendVerifyEmail(value);

      navigate('/confirmation');
    } catch (error) {
      setSendError(error.response.data.message);
    }

    actions.setSubmitting(false);
  };

  return (
    <Flex
      position="relative"
      direction="column"
      p={14}
      pt="150px"
      h="100vh"
      w={!isDesktop ? '100%' : '50%'}
      textAlign="center"
    >
      <motion.div {...createTextAnimationTop(0.5)}>
        <Heading size="xl" mb={10}>
          Resend Email
        </Heading>
      </motion.div>
      <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
        {props => (
          <Stack as={Form} gap={3}>
            <motion.div {...createFormAnimation(0.7)}>
              <AuthEmailInput validateEmail={validateEmail} />
            </motion.div>

            <motion.div {...createFormAnimation(0.5)}>
              {sendError && (
                <AlertError
                  errorMessage={sendError}
                  onCloseCallback={() => setSendError(null)}
                />
              )}
            </motion.div>

            <motion.div {...createFormAnimation(0.9)}>
              <Flex justifyContent="center" alignItems="center" gap="10" pt="5">
                <Button
                  minW="90px"
                  colorScheme="blue"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Resend
                </Button>
              </Flex>
            </motion.div>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};

export default ResendEmail;
