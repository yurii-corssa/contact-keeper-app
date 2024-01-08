import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import LoadSpinner from 'components/LoadSpinner';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { verifyUser } from 'redux/auth/auth-operations';

const VerificationConfirm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmedStatus, setConfirmedStatus] = useState('');

  const { token } = useParams();

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

  const createTextAnimation = delay => ({
    initial: { opacity: 0, y: -10 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
        opacity: { duration: 0.3, ease: 'easeIn', delay },
      },
    },
  });

  return (
    <Flex
      direction="column"
      gap="2"
      pt="150px"
      height="100vh"
      w="100%"
      textAlign="center"
    >
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <motion.div {...createTextAnimation(0.1)}>
            <Heading as="h2" size="xl" mb={5}>
              Registration Confirmation
            </Heading>
          </motion.div>

          <motion.div {...createTextAnimation(0.3)}>
            <Text fontSize="lg" mb={2}>
              {confirmedStatus}
            </Text>
          </motion.div>

          <motion.div {...createTextAnimation(0.4)}>
            <Button as={Link} to="/auth/login" colorScheme="blue">
              Log in
            </Button>
          </motion.div>
        </>
      )}
    </Flex>
  );
};

export default VerificationConfirm;
