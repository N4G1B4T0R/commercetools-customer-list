import styled, { css } from 'styled-components';

const headingStyles = css`
  font-family: 'Inter', sans-serif;
`;

export const StyledH1 = styled.h1`
  ${headingStyles};
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
`;

export const StyledBody1 = styled.span`
  ${headingStyles};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
