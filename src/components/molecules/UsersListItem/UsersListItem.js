import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
  deleteUser: PropTypes.func,
};

export default UsersListItem;
