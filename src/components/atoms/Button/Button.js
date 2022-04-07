import styled from 'styled-components';

export const Button = styled.button`
  margin: 16px 0;
  padding: ${({ isBig }) => (isBig ? '10px 40px' : '7px 20px')};
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;
