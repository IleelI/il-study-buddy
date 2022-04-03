import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;
