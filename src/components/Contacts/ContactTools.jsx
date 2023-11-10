import { AddContactForm } from './AddContactForm';
import { ContactFilter } from './ContactFilter';
import { Flex, Heading, Text } from '@chakra-ui/react';

const ContactTools = () => {
  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p={14}
      color="#fff"
      w="100%"
      height={{ base: '100%', lg: '100vh' }}
      justify="center"
      alignItems="center"
      shadow="md"
    >
      <Heading as="h1" size="2xl" paddingY="5">
        Contact Keeper
      </Heading>
      <Text paddingY="5" textAlign="center" fontSize="lg" maxW="380px">
        Add your contacts and keep them organized in one place. Get started now!
      </Text>
      <AddContactForm />
      <Text paddingY="5" textAlign="center" fontSize="md" maxW="380px">
        Too many contacts? Just start typing a name and let the magic happen!
      </Text>
      <ContactFilter />
    </Flex>
  );
};

export default ContactTools;
