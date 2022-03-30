import styled from 'styled-components';
import { getAverageColor } from './Average';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ average, theme }) => getAverageColor(average, theme)};
`;
