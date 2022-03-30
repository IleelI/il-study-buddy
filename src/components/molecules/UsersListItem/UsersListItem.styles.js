import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;

  &:not(:last-child)::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledInfo = styled.div`
  padding: 0 1.25rem;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
