import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

import { ReactComponent as SuccessIcon } from '../../assets/success.svg';
import FailedIcon from '../../assets/failed.png';

const Wrapper = styled.div`
  width: 20vw;
  min-width: 360px;

  @media (max-width: 360px) {
    min-width: 95vw;
  }
`;

const InputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  outline-color: ${({ theme }) => theme.primary};

  input {
    color: ${({ theme }) => theme.text};
    padding: 8px;
    border: none;
    outline: none;
    height: 100%;
    flex-grow: 1;
  }
`;

const Label = styled.label`
  display: block;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const Error = styled.div`
  margin: 5px auto 0;

  color: ${({ theme }) => theme.warning};
`;

const Input = ({ type, name, label }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Wrapper>
        <Label>{label}</Label>
        <InputStyled>
          <input type={type} {...field} />
        </InputStyled>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Wrapper>
    )}
  </Field>
);

export default Input;
