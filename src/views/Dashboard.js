import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper, GroupNavigation, GroupLink, GroupTitle, GroupAlert } from './Dashboard.styles.js';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => {
        setGroups(data.groups);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => {
        setStudents(data.matchingStudents);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id, groups]);

  return (
    <Wrapper>
      <GroupNavigation>
        <GroupTitle>Group {id}</GroupTitle>
        {groups.map((group) => (
          <GroupLink key={group} to={`/group/${group}`}>
            {group}
          </GroupLink>
        ))}
      </GroupNavigation>
      {groups.filter((group) => group === id).length !== 0 ? null : <GroupAlert>Group not found!</GroupAlert>}
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
