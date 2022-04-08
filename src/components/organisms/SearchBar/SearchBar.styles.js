import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  ${Input} {
    padding: 8px 16px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    position: relative;
    border: none;
    z-index: 2;
    :not(&:only-child) {
      box-shadow: none;
      &:focus {
        box-shadow: none;
      }
    }
  }
`;

export const StatusInfo = styled.div`
  margin-right: 40px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    margin: 5px;
  }
`;

export const ActionWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const SearchResults = styled.ul`
  width: 100%;
  padding: 35px 8px 5px 8px;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  z-index: 1;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

export const SearchResult = styled.li`
  padding: 16px 16px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;
