import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;
