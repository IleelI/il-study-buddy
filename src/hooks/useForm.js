import { useReducer } from 'react';

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_VALUES: 'CLEAR_VALUES',
  CONSENT_TOGGLE: 'CONSENT TOGGLE',
  THROW_ERROR: 'THROW_ERROR',
};

const reducer = (state, action) => {
  const { INPUT_CHANGE, CLEAR_VALUES, CONSENT_TOGGLE, THROW_ERROR } = actionTypes;
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case CLEAR_VALUES: {
      return { ...action.initialValues };
    }
    case CONSENT_TOGGLE: {
      return {
        ...state,
        consent: !state.consent,
      };
    }
    case THROW_ERROR: {
      return {
        ...state,
        error: action.errorValue,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);
  const { INPUT_CHANGE, CLEAR_VALUES, CONSENT_TOGGLE, THROW_ERROR } = actionTypes;

  const handleInputChange = (e) => {
    dispatch({
      type: INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleClearForm = () => {
    dispatch({ type: CLEAR_VALUES, initialValues });
  };
  const handleThrowError = (errorMsg) => {
    dispatch({ type: THROW_ERROR, errorValue: errorMsg });
  };
  const handleConsentToggle = () => {
    dispatch({ type: CONSENT_TOGGLE });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleConsentToggle,
  };
};
