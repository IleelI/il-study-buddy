import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper, GroupNavigation, GroupLink, GroupTitle } from './Dashboard.styles.js';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from '../hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) return <Navigate replace to={`/group/${groups[0]}`} />;

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
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
