import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { useState } from 'react';

const AuthPasswordInput = ({ validatePassword }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Field name="password" validate={validatePassword}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.password && form.touched.password}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type={show ? 'text' : 'password'}
              required
              autoComplete="new-password"
              placeholder="Enter password"
              {...field}
            />
            <InputRightElement>
              <IconButton
                size="sm"
                aria-label={`${show ? 'Hide' : 'Show'} password`}
                icon={show ? <ViewIcon /> : <ViewOffIcon />}
                bg="none"
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default AuthPasswordInput;
