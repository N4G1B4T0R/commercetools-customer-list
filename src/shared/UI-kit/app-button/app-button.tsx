
import { ReactNode, FC } from "react";
import { StyledButton } from "./app-button.styles.tsx";

interface IProps {
  id: string;
  variant: string;
  startIcon: ReactNode;
  children: ReactNode;
}

export const AppButton: FC<IProps> = ({ children, startIcon, variant, id }) => {
  return (
    <StyledButton id={id} variant={variant}>
      {startIcon}
      {children}
    </StyledButton>
  )
};
