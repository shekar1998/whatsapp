import {useState} from 'react';

export default function useForm(callback :any, initialState = {}, validate :any) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function onChange({name, value} :any) {
    let newValue = value;
    if (name !== 'password') newValue = value.toLowerCase();
    setValues({...values, [name]: newValue});
  }

  function onSubmit() {
    const errors = validate(values);
    const isEmpty = !Object.values(errors).some(
      (error) => error !== null && error !== '',
    );
    if (isEmpty) {
      callback();
      setValues(initialState);
      setErrors({});
    } else {
      setErrors(validate(values));
    }
  }

  return {
    onChange,
    onSubmit,
    errors,
    values,
  };
}