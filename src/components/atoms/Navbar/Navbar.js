import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 110px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  header {
    width: 100%;
    padding: 0 1.5rem 0 1rem;
    margin: 1.25rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGrey};
    h1 {
      text-align: end;
      word-wrap: break-word;
      font-weight: normal;
      font-size: ${({ theme }) => theme.fontSize.l};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
