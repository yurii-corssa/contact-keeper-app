import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { motion } from 'framer-motion';
import { createFormAnimation, createTextAnimationTop } from 'utils/animations';

const Greeting = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      gap="2"
      p={14}
      color="#fff"
      height="100vh"
      w="100%"
      maxW="790px"
      justify="center"
      textAlign="center"
    >
      <motion.div {...createTextAnimationTop(0.1)}>
        <Heading as="h1" size="2xl" mb={5}>
          Welcome to Contact Keeper!
        </Heading>
      </motion.div>
      <motion.div {...createTextAnimationTop(0.3)}>
        <Text fontSize="lg" mb={2}>
          Simplicity meets efficiency. 📖
        </Text>
      </motion.div>
      <motion.div {...createTextAnimationTop(0.4)}>
        <Text fontSize="lg" mb={2}>
          With Contact Keeper, you're one step away from a clutter-free contact
          list.
        </Text>
      </motion.div>
      <motion.div {...createTextAnimationTop(0.5)}>
        <Text fontSize="lg" mb={2}>
          Add, delete, and effortlessly search through your contacts with our
          intuitive filter. No more sifting through endless lists or misplaced
          details.
        </Text>
      </motion.div>
      <motion.div {...createTextAnimationTop(0.6)}>
        <Text fontSize="lg">
          Start today and bring order to your contacts. 🌟
        </Text>
      </motion.div>

      <Stack pt="14" direction="row" spacing={10} justifyContent="center">
        {isLoggedIn ? (
          <motion.div {...createFormAnimation(0.3)}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/contacts')}
            >
              Go to Contacts
            </Button>
          </motion.div>
        ) : (
          <>
            <motion.div {...createFormAnimation(0.3)}>
              <Button onClick={() => navigate('/auth/login')}>Log In</Button>
            </motion.div>
            <motion.div {...createFormAnimation(0.3)}>
              <Button
                onClick={() => navigate('/auth/sign-up')}
                colorScheme="white"
                variant="outline"
              >
                Sign Up
              </Button>
            </motion.div>
          </>
        )}
      </Stack>
    </Flex>
  );
};

export default Greeting;
