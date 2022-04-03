import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from '../../../types/types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { handleDeleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => handleDeleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
