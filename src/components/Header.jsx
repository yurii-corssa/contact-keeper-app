import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <Tabs as="header">
      <Flex as={TabList} justifyContent="space-between" alignItems="center">
        <Flex>
          <Link to="/login">
            <Tab>Home</Tab>
          </Link>
          <Link to="/contacts">
            <Tab>Contacts</Tab>
          </Link>
        </Flex>
        <UserMenu />
      </Flex>
    </Tabs>
  );
};

export default Header;
