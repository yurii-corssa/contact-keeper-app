import { Flex } from '@chakra-ui/layout';
import { Outlet } from 'react-router';

const ConfirmationPage = () => {
  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Outlet />
    </Flex>
  );
};

export default ConfirmationPage;
