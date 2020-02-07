import styled from 'styled-components'

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
  font-family: ${ ({ theme }) => theme.fontFamily };
  background: ${ ({ theme }) => theme.colors.primary.medium };
  color: ${ ({ theme }) => theme.colors.white };
  border-radius: 20px;
  height: 40px;
  width: 200px;
  border: 1px solid transparent;
  font-size: 14px;
  box-sizing: border-box;

  &.secondary:not(:disabled) {
    border-color: ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.primary.medium };
    background: ${ ({ theme }) => theme.colors.white };
  }

  &:hover:not(:disabled) {
    background: ${ ({ theme }) => theme.colors.primary.dark };
    color: ${ ({ theme }) => theme.colors.white };
  }

  &:active {
    background: ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.white };
  }

  &:disabled {
    background: ${ ({ theme }) => theme.colors.grey.light };
    color: ${ ({ theme }) => theme.colors.typography.light };
  }

  &.circular {
    width: 40px;
  }
`
