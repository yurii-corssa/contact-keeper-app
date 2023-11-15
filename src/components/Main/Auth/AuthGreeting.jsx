import { Flex, Heading, Text } from '@chakra-ui/react';
import { useDevice } from 'deviceContext';
import { motion } from 'framer-motion';

const AuthGreeting = () => {
  const { deviceType } = useDevice();
  const isDesktop = deviceType === 'desktop';

  const createTextAnimation = delay => ({
    initial: { opacity: 0, x: 40 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.5, ease: [0.05, 0.08, 0.24, 0.96], delay },
        opacity: { duration: 0.3, ease: 'easeIn', delay },
      },
    },
  });

  return (
    <Flex
      direction="column"
      justify="center"
      w={!isDesktop ? '100%' : '50%'}
      h={!isDesktop ? '100%' : '100vh'}
      p="56px"
      color="#fff"
    >
      <motion.div {...createTextAnimation(0.2)}>
        <Heading as="h2" size="2xl" mb={5}>
          Join the Contact Keeper Family! 🌍
        </Heading>
      </motion.div>
      <motion.div {...createTextAnimation(0.3)}>
        <Text fontSize="lg" mb={2}>
          Ready to simplify your connections? Dive into an experience where
          managing contacts feels like a breeze. Sign up to embrace the future
          of contact management or log in to continue the journey.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default AuthGreeting;
