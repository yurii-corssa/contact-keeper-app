import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

function NotFoundPage() {
  return (
    <Box textAlign="center" mt="5rem">
      <Heading mb={4}>404: Page Not Found</Heading>
      <Text mb={4}>Sorry, the page you are looking for does not exist.</Text>
      <Button as={Link} to="/" colorScheme="blue">
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
