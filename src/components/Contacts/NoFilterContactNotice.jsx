import { Flex, Text } from '@chakra-ui/react';

const NoFilterContactNotice = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Text fontSize="lg" color="gray">
        No contacts found with that name.
      </Text>
    </Flex>
  );
};

export default NoFilterContactNotice;
