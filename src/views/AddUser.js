import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from '../hooks/useForm';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const context = useContext(UsersContext);
  const { formValues, handleInputChange, handleConsentToggle, handleClearForm, handleThrowError } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (!formValues.consent) {
      handleThrowError('You need to give consent.');
    } else {
      context.handleAddUser(formValues);
      handleClearForm();
    }
  };

  const { name, attendance, average, consent } = formValues;
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      {}
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={average} onChange={handleInputChange} />
      <FormField type="checkbox" label="Consent" id="consent" name="consent" value={consent} isChecked={consent} onChange={handleConsentToggle} />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
