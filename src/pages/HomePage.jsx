import { Flex } from '@chakra-ui/react';
import Greeting from 'components/Home/Greeting';

const HomePage = () => {
  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Greeting />
    </Flex>
  );
};

export default HomePage;
