import { Label } from '../ContactsBook/Filter/Filter.styled';
// import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter-slice';
import { selectFilter } from 'redux/contacts/contacts-selectors';
import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { SearchIcon } from '@chakra-ui/icons';
import debounce from 'lodash.debounce';
import { useEffect } from 'react';
// import { Form } from 'react-router-dom';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const debouncedSetFilter = debounce(value => {
    dispatch(setFilter(value));
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSetFilter.cancel(); // Отменяем debounce при размонтировании компонента
    };
  }, [debouncedSetFilter]);

  return (
    <Flex direction="column" p={14} width="100%">
      <Formik initialValues={{ filter }}>
        {() => (
          <Stack as={Form}>
            <Field type="text" name="filter">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Filter</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      {...field}
                      onChange={e => {
                        field.onChange(e);
                        debouncedSetFilter(e.target.value);
                      }}
                      variant="filled"
                      placeholder="Find contacts by name"
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
