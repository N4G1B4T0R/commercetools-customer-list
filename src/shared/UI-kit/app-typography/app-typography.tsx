import { FC, ReactNode } from 'react';
import { StyledBody1, StyledH1 } from './app-typography.styles.tsx';

interface IProps {
  id: string;
  variant: string;
  children: ReactNode;
}

type StyledComponentType = typeof StyledH1 | typeof StyledBody1;

export const AppTypography: FC<IProps> = ({ variant, children, id }) => {
  const HeadingComponent: StyledComponentType = {
    h1: StyledH1,
    body1: StyledBody1
  }[variant || 'h1'] || StyledH1;

  return <HeadingComponent id={id}>{children}</HeadingComponent>;
};
