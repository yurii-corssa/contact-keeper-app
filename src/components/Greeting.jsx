import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const Greeting = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  // const navigateTo = path => navigate(path);

  return (
    <Flex
      direction="column"
      bgGradient="linear(-20deg, #2b5876 0%, #4e4376 100%)"
      p={14}
      color="#fff"
      h="100%"
      w="100%"
      justify="center"
    >
      <Heading as="h1" size="2xl" mb={5}>
        Welcome to Contact Keeper!
      </Heading>
      <Text fontSize="lg" mb={2}>
        Simplicity meets efficiency. 📖
      </Text>
      <Text fontSize="lg" mb={2}>
        With Contact Keeper, you're one step away from a clutter-free contact
        list.
      </Text>
      <Text fontSize="lg" mb={2}>
        Add, delete, and effortlessly search through your contacts with our
        intuitive filter. No more sifting through endless lists or misplaced
        details.
      </Text>
      <Text fontSize="lg">
        Start today and bring order to your contacts. 🌟
      </Text>
      <Stack
        pt="14"
        direction="row"
        spacing={10}
        justifyContent="center"
        // variant="solid"
        // colorScheme="blue"
      >
        {isLoggedIn ? (
          <Button
            rightIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/contacts')}
          >
            Go to Contacts
          </Button>
        ) : (
          <>
            <Button onClick={() => navigate('/auth/login')}>Log In</Button>
            <Button
              onClick={() => navigate('/auth/sign-up')}
              colorScheme="white"
              variant="outline"
            >
              Sign Up
            </Button>
          </>
        )}
      </Stack>
    </Flex>
  );
};

export default Greeting;
