import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import UserMenu from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const getTabIndex = path => {
    switch (path) {
      case '/':
        return 0;
      case '/contacts':
        return 1;
      case '/auth/login':
        return 1;
      case '/auth/sign-up':
        return 2;

      default:
        return 0;
    }
  };

  const tabIndex = getTabIndex(location.pathname);

  return (
    <Tabs as="header" index={tabIndex}>
      <Flex as={TabList} justifyContent="space-between" alignItems="center">
        <Flex>
          <Link to="/">
            <Tab>Home</Tab>
          </Link>
          {isLoggedIn && (
            <Link to="/contacts">
              <Tab>Contacts</Tab>
            </Link>
          )}
        </Flex>
        <UserMenu />
      </Flex>
    </Tabs>
  );
};

export default Header;
