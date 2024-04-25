import React from 'react';
import { StyledInput, StyledLabel, StyledFormGroup } from './FormInput.styled';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange }) => {
  return (
    <StyledFormGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput value={value} onChange={(e) => onChange(e.target.value)} />
    </StyledFormGroup>
  );
};

export default FormInput;
