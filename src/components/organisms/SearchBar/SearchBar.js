import React, { useState } from 'react';
import { debounce } from 'lodash/function';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResults, SearchResultsItem, StatusInfo, SearchWrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    itemToString: (item) => (item ? item.name : ''),
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input name="searchValue" id="searchValue" {...getInputProps()} placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
