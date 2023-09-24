import { PhoneIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';

const ContactNumberInput = ({ variant }) => {
  const validateNumber = value => {
    if (!value) {
      return 'Number is required';
    }
  };

  return (
    <Field name="number" validate={validateNumber}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.number && form.touched.number}>
          <FormLabel>Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              required
              autoComplete=""
              placeholder="123-456-7890"
              color="black"
              variant={variant}
              _focus={{ color: variant === 'filled' ? 'white' : 'black' }}
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.number}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default ContactNumberInput;
