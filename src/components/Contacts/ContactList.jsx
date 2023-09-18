import { Flex, Heading } from '@chakra-ui/react';

const ContactList = () => {
  return (
    <Flex direction="column" p={14} width="100%">
      <Heading size="xl" mb={10}>
        Contacts
      </Heading>
    </Flex>
  );
};

export default ContactList;
