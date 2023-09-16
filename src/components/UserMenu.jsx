import { ChevronDownIcon } from '@chakra-ui/icons';
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
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <Flex>
      <Menu>
        <MenuButton>
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
    </Flex>
  );
};

export default UserMenu;
