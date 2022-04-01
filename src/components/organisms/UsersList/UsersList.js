import React from 'react';
import { StyledList } from './UsersList.styles';
import { ViewWrapper } from '../../atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from '../../atoms/StyledTitle/StyledTitle';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <ViewWrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      average: PropTypes.string.isRequired,
      attendance: PropTypes.string,
    })
  ),
};

export default UsersList;
