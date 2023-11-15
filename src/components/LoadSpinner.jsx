import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadSpinner = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      justify="center"
      align="center"
      w="100%"
      h="100vh"
      margin="auto"
      background="#2b587653"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#4e4376"
        size="xl"
      />
    </Flex>
  );
};

export default LoadSpinner;
