import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Slide,
  Tab,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const bgColor = useColorModeValue('#f4f4f4');

  const toggleMenu = () => setIsOpen(!isOpen);

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
        return null;
    }
  };

  const tabIndex = getTabIndex(location.pathname);

  return (
    <Box position="relative" as="header">
      <IconButton
        onClick={toggleMenu}
        variant="ghost"
        size="lg"
        icon={<HamburgerIcon fontSize="3xl" color="white" />}
        position="fixed"
        top="1"
        right="1"
      />
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box height="100vh" p="40px" bg={bgColor} shadow="md">
          <IconButton
            onClick={toggleMenu}
            variant="ghost"
            size="lg"
            icon={<CloseIcon fontSize="1xl" />}
            position="absolute"
            top="1"
            right="1"
          />
          <Tabs h="100%" index={tabIndex}>
            <Flex
              h="100%"
              as={TabList}
              flexDir="column-reverse"
              justifyContent="start"
              pt="8"
              gap="10"
            >
              <Flex flexDir="column" align="center">
                <Link to="/">
                  <Tab w="300px" onClick={toggleMenu}>
                    Home
                  </Tab>
                </Link>
                {isLoggedIn && (
                  <Link to="/contacts">
                    <Tab w="300px" onClick={toggleMenu}>
                      Contacts
                    </Tab>
                  </Link>
                )}
              </Flex>
              <UserMenu toggleBurgerMenu={toggleMenu} />
            </Flex>
          </Tabs>
        </Box>
      </Slide>
    </Box>
  );
};

export default BurgerMenu;
