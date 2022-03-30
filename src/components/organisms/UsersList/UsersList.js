import React from 'react';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;
