import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  background-color: ${({ theme }) => theme.button};
  width: 95%;
  margin: 0 auto;
  padding: 15px;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 5px;

  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 2px #bbb;
  }
`;

export default Button;
