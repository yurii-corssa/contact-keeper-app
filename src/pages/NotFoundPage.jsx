import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

function NotFoundPage() {
  return (
    <Flex justify="center" alignItems="center" h="100vh" flexDir="column">
      <Heading size="4xl" mb={4}>
        404
      </Heading>
      <Heading mb={4}>Page Not Found</Heading>
      <Text mb={4}>Sorry, the page you are looking for does not exist.</Text>
      <Button as={Link} to="/" colorScheme="blue">
        Go to Home
      </Button>
    </Flex>
  );
}

export default NotFoundPage;
