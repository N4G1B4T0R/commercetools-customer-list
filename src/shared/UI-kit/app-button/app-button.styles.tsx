import styled from 'styled-components'

export const StyledButton = styled.button<{ variant: string }>`
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.black};
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  background-color:  ${({ theme }) => theme.palette.white};
  
  &:hover {
    background-color:  ${({ theme }) => theme.palette.secondary};
  }
`
