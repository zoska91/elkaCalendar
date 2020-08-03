import React, { useState } from 'react';
import { Formik, Form as FormFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';

import { auth } from '../components/Firebase/firebase';
import notification from '../Functions/notification';

import Form from '../components/Login/Form';
import Input from '../components/Login/Input';
import Button from '../components/Shared/Button';

const ChangePasswordButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  padding-left: 10px;

  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: translateX(10px);
  }
`;

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(4),
});

const LoginPage = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const sendResetEmail = email => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        notification('Email do zresetowania hasła został wysłany', 'Sprawdź pocztę!', 'success');
      })
      .catch(() => {
        setError('Error resetting password');
      });
  };

  const handleSubmit = async values => {
    setStatus('loading');

    try {
      auth.signInWithEmailAndPassword(values.email, values.password);
      setStatus('success');
    } catch (error) {
      setError(error.message);
      console.log('Error signing in with password and email', error);
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'success' ? (
        <Redirect to={{ pathname: '/' }} />
      ) : (
        <Form title='Zaloguj się' status={status} error={error}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ values }) => (
              <FormFormik style={{ margin: '0 auto' }}>
                <Input type='text' name='email' label='Login' login />
                <Input type='password' name='password' label='Hasło' login />
                <Button>Zaloguj się</Button>
                <ChangePasswordButton type='button' onClick={() => sendResetEmail(values.email)}>
                  Chcesz zresetować hasło?
                </ChangePasswordButton>
              </FormFormik>
            )}
          </Formik>
        </Form>
      )}
    </>
  );
};

export default LoginPage;
