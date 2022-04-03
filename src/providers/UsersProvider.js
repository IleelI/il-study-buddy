import React, { useState } from 'react';
import { users as usersData } from '../data/users';
import PropTypes from 'prop-types';

export const UsersContext = React.createContext({
  users: [],
  handleDeleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = ({ name, attendance, average }) => {
    const newUser = {
      name: name,
      attendance: attendance,
      average: average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleDeleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default UsersProvider;
