import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SearchBarWrapper, SearchResults, SearchResult, StatusInfo, ActionWrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [foundStudents, setFoundStudents] = useState([]);
  const { id } = useParams();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data: { matchingStudents } }) => {
        if (searchValue !== '') {
          const filteredStudents = matchingStudents.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));
          setFoundStudents(filteredStudents);
        } else {
          setFoundStudents([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [searchValue, id]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <ActionWrapper>
        <Input name="searchValue" id="searchValue" value={searchValue} onChange={handleInputChange} />
        {foundStudents.length > 0 ? (
          <SearchResults>
            {foundStudents.map(({ id, name }) => (
              <SearchResult key={id}>{name}</SearchResult>
            ))}
          </SearchResults>
        ) : null}
      </ActionWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
