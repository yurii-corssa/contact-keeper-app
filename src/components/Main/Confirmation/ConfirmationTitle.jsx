import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ConfirmationTitle = () => {
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
      <motion.div {...createTextAnimation(0.1)}>
        <Heading as="h2" size="xl" mb={5}>
          Registration Confirmation
        </Heading>
      </motion.div>

      <motion.div {...createTextAnimation(0.3)}>
        <Text fontSize="lg" mb={2}>
          Your verification email has been successfully sent! Please check your
          email to complete the verification process.
        </Text>
      </motion.div>

      <motion.div {...createTextAnimation(0.4)}>
        <Button as={Link} to="/confirmation/resend" colorScheme="blue">
          Resend Email
        </Button>
      </motion.div>
    </Flex>
  );
};

export default ConfirmationTitle;
