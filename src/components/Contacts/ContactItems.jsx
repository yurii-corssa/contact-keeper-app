import { CopyIcon, DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  IconButton,
  Text,
  Tooltip,
  useClipboard,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { removeContactThunk } from 'redux/contacts/contacts-operations';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';

export const ContactItems = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const clipboard = useClipboard;

  return filteredContacts.map(contact => {
    const { id, name, number } = contact;
    const handleRemove = () => dispatch(removeContactThunk(id));
    // const { onCopy } = clipboard(number);

    return (
      <Flex
        key={id}
        alignItems="center"
        // justifyContent="space-between"
        paddingX="1rem"
        paddingY="0.5rem"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Avatar name={name} mr={3} />
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          pr={5}
        >
          <Text fontWeight="bold">{name}:</Text>
          <Text>{number}</Text>
        </Flex>
        <Flex>
          <Tooltip hasArrow label="Call" bg="gray.500">
            <IconButton
              aria-label="Call"
              icon={<PhoneIcon />}
              as="a"
              href={`tel:${number}`}
              mr={2}
            />
          </Tooltip>
          <Tooltip hasArrow label="Copy number" bg="gray.500">
            <IconButton
              aria-label="Copy number"
              icon={<CopyIcon />}
              // onClick={onCopy}
              mr={2}
            />
          </Tooltip>
          <Tooltip hasArrow label="Delete" bg="red.400">
            <IconButton
              aria-label="Delete"
              icon={<DeleteIcon />}
              colorScheme="red"
              variant="ghost"
              onClick={handleRemove}
            />
          </Tooltip>
        </Flex>
      </Flex>
    );
  });
};
