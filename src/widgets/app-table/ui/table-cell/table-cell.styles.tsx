import styled, { keyframes } from 'styled-components';

export const StyledCell = styled.td`
  padding: 29px 0;
  text-align: center;
  user-select: none;
`;

const breatheAnimation = keyframes`
 0% { opacity: 1 }
 50% { opacity: 0.4 }
 100% { opacity: 1; }
`;

export const StyledSkeleton = styled.span`
  display: block;
  margin-left: 16px;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.11);
  height: 20px;
  animation: 2s ease-in-out 0.5s infinite normal none running ${breatheAnimation};
  user-select: none;
`;
