import React, { useState, useContext } from 'react';
import { Formik, Form as FormFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';

import notification from '../Functions/notification';
import { auth, generateUserDocument } from '../components/Firebase/firebase';
import { UserContext } from '../components/Firebase/UserProvider';

import Form from '../components/Login/Form';
import Input from '../components/Login/Input';
import Button from '../components/Shared/Button';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(4),
});

const CreateAccountPage = () => {
  const user = useContext(UserContext);

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async values => {
    setStatus('loading');

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      generateUserDocument(user, {
        name: values.name,
        role: values.role,
        phone: values.phone,
      });
      setStatus('success');
      notification('Udało się', 'Konto zostało założone', 'success');
    } catch (error) {
      setError(error.message);
      console.log(error);
      setStatus('');
    }
  };

  return (
    <>
      {user?.role !== 'admin' ? (
        <Redirect to={{ pathname: '/login' }} />
      ) : (
        <Form title='Utwórz konto' status={status} error={error}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              name: '',
              phone: '',
              role: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {() => (
              <FormFormik style={{ margin: '0 auto' }}>
                <Input type='text' name='email' label='Login (email)' />
                <Input type='text' name='name' label='Imię i Nazwisko' />
                <Input type='number' name='phone' label='Nr telefonu' />
                <Input type='text' name='role' label='Rola (INS/STUD)' />
                <Input
                  type='password'
                  name='password'
                  label='Hasło tymczasowe'
                />
                <Button type='submit'>Utwórz konto</Button>
              </FormFormik>
            )}
          </Formik>
        </Form>
      )}
    </>
  );
};

export default CreateAccountPage;
