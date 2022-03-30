import React from 'react';

import UsersListItem from '../UsersListItem/UsersListItem';
import { users } from 'data/users';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
