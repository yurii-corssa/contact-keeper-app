import { Flex, Heading, Text } from '@chakra-ui/react';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';
import { createTextAnimationRight } from 'utils/animations';

const AuthGreeting = () => {
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

  return (
    <Flex
      direction="column"
      justify="center"
      w={!isDesktop ? '100%' : '50%'}
      h={!isDesktop ? '50vh' : '100vh'}
      p="56px"
      color="#fff"
    >
      <motion.div {...createTextAnimationRight(0.2)}>
        <Heading as="h2" size={!isDesktop ? 'xl' : '2xl'} mb={5}>
          Join the Contact Keeper Family!
        </Heading>
      </motion.div>
      <motion.div {...createTextAnimationRight(0.3)}>
        <Text fontSize={!isDesktop ? 'md' : 'lg'} mb={2}>
          Ready to simplify your connections? Dive into an experience where
          managing contacts feels like a breeze. Sign up to embrace the future
          of contact management or log in to continue the journey.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default AuthGreeting;
