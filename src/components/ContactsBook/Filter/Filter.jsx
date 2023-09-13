import { Label } from './Filter.styled';
import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={filter}
      />
    </>
  );
};
