import React from 'react';
import styled from 'styled-components';

import Indicator from '../Shared/Indicator';
import Elka from '../Shared/Elka';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 320px;
  border-radius: 10px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: ${({ theme }) => theme.bg};
  clip-path: polygon(0 15%, 100% 78%, 100% 100%, 0% 100%);

  @media (orientation: landscape) {
    height: 100vh;
    background-position: center top;
    background-size: cover;
    clip-path: polygon(0 0, 37% 0, 68% 100%, 0% 100%);
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
`;

const Error = styled.p`
  color: ${({ theme }) => theme.warning};
  padding: 0 10px;
`;

const Form = ({ children, title, status, error }) => (
  <Wrapper>
    <Background />
    <Container>
      {status === 'in progress' && <Indicator />}
      <Title>{title}</Title>
      {error && <Error>{error}</Error>}
      {children}
      <Elka />
    </Container>
  </Wrapper>
);

export default Form;
