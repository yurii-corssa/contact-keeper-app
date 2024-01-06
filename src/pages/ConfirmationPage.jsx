import { Box, Center, Heading, Text } from '@chakra-ui/layout';

const ConfirmationPage = () => {
  return (
    <Center h="100vh" bg="gray.100">
      <Box p={6} bg="white" boxShadow="md" borderRadius="lg">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Registration Confirmation
        </Heading>
        <Text fontSize="lg" mb={6} textAlign="center">
          Your account has been successfully created! Please check your email to
          confirm your account.
        </Text>
      </Box>
    </Center>
  );
};

export default ConfirmationPage;
