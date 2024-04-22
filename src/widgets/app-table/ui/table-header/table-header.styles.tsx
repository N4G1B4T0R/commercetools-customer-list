import styled from 'styled-components';

export const StyledHeadCell = styled.th`
  padding: 24px 16px;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  border: solid 0 ${({ theme }) => theme.palette.white};
  border-right-width: 1px;
  color: ${({ theme }) => theme.palette.black};
  background: ${({ theme }) => theme.palette.secondary};
  border-color: ${({ theme }) => theme.palette.white};
  user-select: none;
  &:last-of-type {
    border-right-width: 0;
  },
`;
