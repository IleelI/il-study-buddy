import React from 'react';
import StudentsList from './StudentsList';

export default {
  title: 'Components/Organisms/StudentsList',
  component: StudentsList,
};

const Template = (args) => <StudentsList {...args} />;

export const Default = Template.bind({});
