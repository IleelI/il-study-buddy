import styled from 'styled-components';

export const Button = styled.button`
  margin: 16px 0;
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightPurple};
`;
