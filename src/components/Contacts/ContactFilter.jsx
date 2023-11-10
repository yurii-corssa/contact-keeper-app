import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter-slice';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import { Field, Form, Formik } from 'formik';
import { SearchIcon } from '@chakra-ui/icons';
import debounce from 'lodash.debounce';
import { useEffect } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const debouncedSetFilter = debounce(value => {
    dispatch(setFilter(value));
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSetFilter.cancel();
    };
  }, [debouncedSetFilter]);

  return (
    <Flex direction="column" maxW="380px" width="100%">
      <Formik initialValues={{ filter }}>
        {() => (
          <Stack as={Form}>
            <Field name="filter">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Filter</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      variant="filled"
                      placeholder="Find contacts by name"
                      color="black"
                      _focus={{ color: 'white' }}
                      {...field}
                      onChange={e => {
                        field.onChange(e);
                        debouncedSetFilter(e.target.value);
                      }}
                    />
                  </InputGroup>
                </FormControl>
              )}
            </Field>
          </Stack>
        )}
      </Formik>
    </Flex>
  );
};
