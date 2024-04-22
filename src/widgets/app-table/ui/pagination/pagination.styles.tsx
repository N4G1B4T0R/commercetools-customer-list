import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`

export const PageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:disabled {
    color: ${({ theme }) => theme.palette.secondary};
  }
`

export const Text = styled.span`
  color: ${({ theme }) => theme.palette.black};
`

export const PageNumberInput = styled.input`
  text-align: center;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor };
`
