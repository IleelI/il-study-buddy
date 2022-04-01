import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RouterLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;
  padding: 0.5rem 1.5rem;
  & + & {
    margin-top: 0.5rem;
  }
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 0;
    width: 1rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.grey};
    transform: translateY(-50%);
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }
`;
