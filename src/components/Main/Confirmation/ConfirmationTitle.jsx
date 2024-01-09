import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createTextAnimationTop } from 'utils/animations';

const ConfirmationTitle = () => {
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

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
      <motion.div {...createTextAnimationTop(0.1)}>
        <Heading as="h2" size="xl" mb={5}>
          Registration Confirmation
        </Heading>
      </motion.div>

      <motion.div {...createTextAnimationTop(0.3)}>
        <Text fontSize="lg" mb={2}>
          Your verification email has been successfully sent! Please check your
          email to complete the verification process.
        </Text>
      </motion.div>

      <motion.div {...createTextAnimationTop(0.4)}>
        <Button as={Link} to="/confirmation/resend" colorScheme="blue">
          Resend Email
        </Button>
      </motion.div>
    </Flex>
  );
};

export default ConfirmationTitle;
