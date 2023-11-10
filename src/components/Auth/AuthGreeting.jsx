import { Flex, Heading, Text } from '@chakra-ui/react';

const AuthGreeting = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p="56px"
      color="#fff"
      w="100%"
      justify="center"
      h={{ base: '100%', lg: '100vh' }}
      minH="50vh"
    >
      <Heading as="h2" size="2xl" mb={5}>
        Join the Contact Keeper Family! 🌍
      </Heading>
      <Text fontSize="lg" mb={2}>
        Ready to simplify your connections? Dive into an experience where
        managing contacts feels like a breeze. Sign up to embrace the future of
        contact management or log in to continue the journey.
      </Text>
    </Flex>
  );
};

export default AuthGreeting;
