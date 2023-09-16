import { Flex, Heading, Text } from '@chakra-ui/react';

const Greeting = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p={14}
      color="#fff"
      h="100%"
      w="100%"
      justify="center"
    >
      <Heading size="2xl" mb={5}>
        Welcome to Contact Keeper!
      </Heading>
      <Text fontSize="lg" mb={2}>
        Simplicity meets efficiency. 📖
      </Text>
      <Text fontSize="lg" mb={2}>
        With Contact Keeper, you're one step away from a clutter-free contact
        list.
      </Text>
      <Text fontSize="lg" mb={2}>
        Add, delete, and effortlessly search through your contacts with our
        intuitive filter. No more sifting through endless lists or misplaced
        details.
      </Text>
      <Text fontSize="lg">
        Start today and bring order to your contacts. 🌟
      </Text>
    </Flex>
  );
};

export default Greeting;
