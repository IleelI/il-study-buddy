import React, { useState, useEffect } from 'react';
import StudentsListItem from 'components/molecules/UsersListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { getStudents } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students ? students.map((studentData) => <StudentsListItem key={studentData.name} studentData={studentData} />) : null}
      </StyledList>
    </>
  );
};

export default StudentsList;
