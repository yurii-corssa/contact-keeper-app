import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const AlertError = ({ errorMessage, onCloseCallback }) => {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  const handleClose = () => {
    onClose();

    if (onCloseCallback) {
      onCloseCallback();
    }
  };

  return (
    isVisible && (
      <Alert status="error">
        <AlertIcon />
        <Box w="100%">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={handleClose}
        />
      </Alert>
    )
  );
};

export default AlertError;
