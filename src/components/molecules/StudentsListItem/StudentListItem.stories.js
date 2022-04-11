import React from 'react';
import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};
const mockedData = {
  name: 'Vitold',
  average: 4.0,
  attendance: '56%',
};

const Template = (args) => <StudentsListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  studentData: {
    ...mockedData,
    average: 2.0,
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  studentData: {
    ...mockedData,
    average: 3.5,
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  studentData: {
    ...mockedData,
    average: 5.0,
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  studentData: {
    ...mockedData,
    average: null,
  },
};
