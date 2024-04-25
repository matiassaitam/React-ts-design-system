import React, { useState } from 'react';
import FormInput from '../../molecules/FormInput/FormInput';
import { StyledLoginFormContainer, StyledSubmitButton } from './LoginForm.styled';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <StyledLoginFormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput label="Username" value={username} onChange={handleUsernameChange} />
        <FormInput label="Password" value={password} onChange={handlePasswordChange} />
        <StyledSubmitButton type="submit">Login</StyledSubmitButton>
      </form>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
