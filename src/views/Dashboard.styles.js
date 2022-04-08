import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Title } from '../components/atoms/Title/Title';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GroupNavigation = styled.nav`
  margin: 30px 50px 15px 50px;
  max-width: 500px;
  display: flex;
  align-items: center;
`;

export const GroupLink = styled(Link)`
  padding: 4px 8px;
  margin: 0 12px;
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 50px;
`;

export const GroupTitle = styled(Title)`
  margin: 0 25px 0 0;
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const GroupAlert = styled.h3`
  margin: 0 50px;
  color: ${({ theme }) => theme.colors.grey};
`;
