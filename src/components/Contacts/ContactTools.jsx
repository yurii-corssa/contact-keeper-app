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
      <Heading as="h1" size="2xl" paddingY="5">
        Contact Keeper
      </Heading>
      <Text paddingX="14" paddingY="5" textAlign="center" fontSize="lg">
        Add your contacts and keep them organized in one place. Get started now!
      </Text>
      <ContactForm />
      <Text paddingX="14" paddingY="5" textAlign="center" fontSize="md">
        Too many contacts? Just start typing a name and let the magic happen!
      </Text>
      <ContactFilter />
    </Flex>
  );
};

export default ContactTools;
