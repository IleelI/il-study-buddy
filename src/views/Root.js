import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Outlet, Route } from 'react-router-dom';
import { users as usersData } from 'data/users';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import UsersList from '../components/organisms/UsersList/UsersList';
import Form from '../components/organisms/Form/Form';
import { Wrapper } from './Root.styles';
import { RouterLink } from '../components/atoms/RouterLink/RouterLink';
import { Navbar } from '../components/atoms/Navbar/Navbar';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navbar>
            <header>
              <h1>Study Buddy</h1>
            </header>
            <RouterLink to="/" isActive>
              Dashboard
            </RouterLink>
            <RouterLink to="/add-user">Add user</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
            <RouterLink to="/logout">Logout</RouterLink>
          </Navbar>
          <Outlet />
          <Routes>
            <Route path="/" element={<UsersList users={users} deleteUser={deleteUser} />} />
            <Route path="/add-user" element={<Form handleAddUser={handleAddUser} handleInputChange={handleInputChange} formValues={formValues} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

Root.propTypes = {};

export default Root;
