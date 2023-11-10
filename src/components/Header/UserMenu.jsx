import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogout } from 'redux/auth/auth-operations';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/auth-selectors';
import { BiLogOut } from 'react-icons/bi';
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
  Tab,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

const UserMenu = ({ toggleBurgerMenu }) => {
  const name = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMobile] = useMediaQuery('(max-width: 992px)');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return isLoggedIn ? (
    <Flex justify="center">
      {!isMobile ? (
        <Menu>
          <MenuButton mr="5">
            <Avatar mr={2} size="xs" name={name} src="#" />
            <Text as="b" mr={1}>
              {name}
            </Text>
            <ChevronDownIcon />
          </MenuButton>

          <Portal>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem fontSize="0.9rem" onClick={handleLogout}>
                  Log Out
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Portal>
        </Menu>
      ) : (
        <Flex direction="column" align="center" gap={5}>
          <Avatar size="2xl" name={name} src="#" />
          <Text as="b" fontSize="2xl">
            {name}
          </Text>
          <Button
            leftIcon={<BiLogOut />}
            variant="ghost"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Flex>
      )}
    </Flex>
  ) : (
    <Flex align="center" flexDir={{ base: 'column', lg: 'row' }}>
      <Link to="/auth/login">
        <Tab w={{ base: '300px', lg: '100%' }} onClick={toggleBurgerMenu}>
          Login
        </Tab>
      </Link>
      <Link to="/auth/sign-up">
        <Tab w={{ base: '300px', lg: '100%' }} onClick={toggleBurgerMenu}>
          Sign Up
        </Tab>
      </Link>
    </Flex>
  );
};

export default UserMenu;
