import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapp, LabelSearch, InputSearch } from './ContactsFilter.styled';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContacts } from 'redux/contacts/filter-slice';

export default function Filter() {
  const value = useSelector(getFilter);
  // console.log('valueFilter ===>', value);

  const dispatch = useDispatch();

  // Відповідає за оновлення стану list by search
  const onChange = e => {
    const normalizedValue = e.currentTarget.value.toLowerCase();
    dispatch(filterContacts(normalizedValue));
  };

  return (
    <FilterWrapp>
      <LabelSearch htmlFor={'id' + nanoid()}>
        Find contacts by name
        <InputSearch
          id={'id' + nanoid()}
          placeholder="Search"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </LabelSearch>
    </FilterWrapp>
  );
}
