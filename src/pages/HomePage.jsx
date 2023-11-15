import { Flex } from '@chakra-ui/react';
import Greeting from 'components/Main/Home/Greeting';

const HomePage = () => {
  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Greeting />
    </Flex>
  );
};

export default HomePage;
