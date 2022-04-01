import React from 'react';
import { ViewWrapper } from '../../atoms/ViewWrapper/ViewWrapper';
import { StyledTitle } from '../../atoms/StyledTitle/StyledTitle';
import FormField from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';
import PropTypes from 'prop-types';

const Form = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add user</Button>
    </ViewWrapper>
  );
};

Form.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default Form;
