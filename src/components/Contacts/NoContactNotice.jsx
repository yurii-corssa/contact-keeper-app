import { Flex, Text } from '@chakra-ui/react';

const NoContactNotice = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Text fontSize="lg" color="gray">
        Your contact book is empty. Add your first contact!
      </Text>
    </Flex>
  );
};

export default NoContactNotice;
