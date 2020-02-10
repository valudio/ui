import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
  font-family: ${ ({ theme }) => theme.fontFamily };
  border-radius: 20px;
  height: 40px;
  width: 200px;
  border: 1px solid;
  font-size: 14px;
  box-sizing: border-box;

  &:active {
    background: ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.white };
  }

  &.circular {
    width: 40px;
  }
`

export const Primary = styled(Button)`
  border-color: transparent;
  color: ${ ({ theme }) => theme.colors.white };
  background: ${ ({ theme }) => theme.colors.primary.medium };

  &:disabled {
    background: ${ ({ theme }) => theme.colors.grey.light };
    color: ${ ({ theme }) => theme.colors.typography.light };
  }

  &:not(:disabled) {
    &:hover {
      background: ${ ({ theme }) => theme.colors.primary.dark };
      color: ${ ({ theme }) => theme.colors.white };
    }
  }
`

export const Secondary = styled(Button)`
  border-color: ${ ({ theme }) => theme.colors.primary.medium };
  color: ${ ({ theme }) => theme.colors.primary.medium };
  background: ${ ({ theme }) => theme.colors.white };

  &:disabled {
    background: ${ ({ theme }) => theme.colors.grey.light };
    color: ${ ({ theme }) => theme.colors.typography.light };
    border-color: ${ ({ theme }) => theme.colors.grey.light };
  }

  &:not(:disabled) {
    &:hover {
      background: ${ ({ theme }) => theme.colors.primary.dark };
      color: ${ ({ theme }) => theme.colors.white };
    }
  }
`

export const Tertiary = styled(Button)`
  border-color: ${ ({ theme }) => theme.colors.grey.dark };
  color: ${ ({ theme }) => theme.colors.typography.medium };
  background: ${ ({ theme }) => theme.colors.white };

  &:disabled {
    background: ${ ({ theme }) => theme.colors.grey.medium };
    color: ${ ({ theme }) => theme.colors.typography.light };
  }

  &:not(:disabled) {
    &:hover {
      background: ${ ({ theme }) => theme.colors.grey.medium };
    }

    &:focus {
      background: ${ ({ theme }) => theme.colors.grey.medium };
      color: ${ ({ theme }) => theme.colors.primary.medium };
    }

    &:active {
      background: ${ ({ theme }) => theme.colors.grey.medium };
      color: ${ ({ theme }) => theme.colors.primary.dark };
    }
  }
`
