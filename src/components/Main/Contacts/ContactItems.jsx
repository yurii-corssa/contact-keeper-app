import { DeleteIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeContactThunk } from 'redux/contacts/contacts-operations';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import { FaEllipsisV } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { createContactAnimation } from 'utils/animations';
import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
  Text,
  Tooltip,
} from '@chakra-ui/react';

export const ContactItems = ({ handleOpenModal }) => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  let contactDelayAnimation = 0.3;

  return filteredContacts.map(contact => {
    const { id, name, phone } = contact;
    const handleRemove = () => dispatch(removeContactThunk(id));
    const onOpenModal = () => handleOpenModal(id, name, phone);
    contactDelayAnimation = contactDelayAnimation + 0.05;

    return (
      <motion.div key={id} {...createContactAnimation(contactDelayAnimation)}>
        <Flex
          alignItems="center"
          paddingX="1rem"
          paddingY="0.5rem"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Avatar name={name} mr={3} />
          <Flex
            alignItems={{ base: 'start', sm: 'center' }}
            justifyContent="space-between"
            direction={{ base: 'column', sm: 'row' }}
            width="100%"
            pr={5}
          >
            <Text fontWeight="bold">{name}:</Text>
            <Text>{phone}</Text>
          </Flex>
          <Flex>
            <Tooltip hasArrow label="Call" bg="gray.500">
              <IconButton
                aria-label="Call"
                icon={<PhoneIcon />}
                as="a"
                href={`tel:${phone}`}
                mr={2}
              />
            </Tooltip>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="settings"
                icon={<FaEllipsisV />}
                variant="ghost"
              />
              <Portal>
                <MenuList>
                  <MenuGroup title="Settings">
                    <MenuItem gap="2" fontSize="0.9rem" onClick={onOpenModal}>
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem gap="2" fontSize="0.9rem" onClick={handleRemove}>
                      <DeleteIcon />
                      Delete
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Portal>
            </Menu>
          </Flex>
        </Flex>
      </motion.div>
    );
  });
};
