import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import LoadSpinner from 'components/LoadSpinner';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { verifyUser } from 'redux/auth/auth-operations';
import { createFormAnimation, createTextAnimationTop } from 'utils/animations';

const VerificationConfirm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmedStatus, setConfirmedStatus] = useState('');

  const { token } = useParams();
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

  useEffect(() => {
    verifyUser(token)
      .then(res => {
        setConfirmedStatus(res.data.message);
      })
      .catch(({ response }) => {
        setConfirmedStatus(response.data.message);
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  return (
    <Flex
      direction="column"
      gap="2"
      p={14}
      pt="150px"
      h="100vh"
      w={!isDesktop ? '100%' : '50%'}
      textAlign="center"
    >
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <motion.div {...createTextAnimationTop(0.1)}>
            <Heading as="h2" size="xl" mb={5}>
              Registration Confirmation
            </Heading>
          </motion.div>

          <motion.div {...createTextAnimationTop(0.3)}>
            <Text fontSize="lg" mb={2}>
              {confirmedStatus}
            </Text>
          </motion.div>

          <motion.div {...createFormAnimation(0.4)}>
            <Button as={Link} to="/auth/login" colorScheme="blue">
              Log In
            </Button>
          </motion.div>
        </>
      )}
    </Flex>
  );
};

export default VerificationConfirm;
