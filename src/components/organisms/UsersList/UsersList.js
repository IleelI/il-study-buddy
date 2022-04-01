import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';

const mockAPI = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (usersData) {
        res([...usersData]);
      } else {
        rej({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;
