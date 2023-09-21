import { ContactForm } from './ContactForm';
import { ContactFilter } from './ContactFilter';
import { Flex, Heading, Text } from '@chakra-ui/react';

const ContactTools = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p={14}
      color="#fff"
      minH="calc(100vh - 42px)"
      w="100%"
      justify="center"
      alignItems="center"
    >
      <Heading as="h1" size="2xl" mb={5}>
        Phonebook
      </Heading>
      {/* <Text fontSize="lg" mb={2}>
        Simplicity meets efficiency. 📖
      </Text> */}
      <ContactForm />
      <ContactFilter />
    </Flex>
  );
};

export default ContactTools;
