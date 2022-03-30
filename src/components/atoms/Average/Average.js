import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage } from './Average.styles';

export const getAverageColor = (average, theme) => {
  const parsedAverage = parseFloat(average);
  switch (true) {
    case parsedAverage < 3.0:
      return theme.colors.error;
    case parsedAverage < 4.0:
      return theme.colors.warning;
    case parsedAverage <= 5.0:
      return theme.colors.success;
    default:
      return theme.colors.grey;
  }
};

const Average = ({ average }) => <StyledAverage average={average}>{average}</StyledAverage>;

Average.propTypes = {
  average: PropTypes.string,
};

export default Average;
