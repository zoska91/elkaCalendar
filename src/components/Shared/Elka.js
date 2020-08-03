import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 10px solid white;
  height: 100px;
  width: 100px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letter = styled.span`
  color: white;
  font-size: 70px;
  font-family: arial;
  font-weight: bold;
`;

const Elka = () => {
  return (
    <Wrapper>
      <Letter>L</Letter>
    </Wrapper>
  );
};

export default Elka;
