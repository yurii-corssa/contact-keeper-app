import { Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadSpinner = () => {
  return (
    <Spinner
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      margin="auto"
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default LoadSpinner;
