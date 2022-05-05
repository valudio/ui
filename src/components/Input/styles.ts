import styled from 'styled-components'

export default styled.input`
  height: 40px;
  outline: 0;
  margin: 0;
  padding: 0;
  background: ${ ({ theme }) => theme.colors.grey.light };
  text-indent: 12px;
  font-family: ${ ({ theme }) => theme.fontFamily };
  color: ${ ({ theme }) => theme.colors.typography.dark };
  font-size: 16px;
  max-width: 400px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  &:focus {
    border: 1.5px solid ${ ({ theme }) => theme.colors.primary.medium };
    background: ${ ({ theme }) => theme.colors.white };
    color: ${ ({ theme }) => theme.colors.typography.medium };
  }

  &:disabled {
    color: ${ ({ theme }) => theme.colors.typography.light };
    background: ${ ({ theme }) => theme.colors.grey.medium };
    cursor: not-allowed;
  }

  &.invalid {
    background: ${ ({ theme }) => theme.colors.white };
    border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };
    color: ${ ({ theme }) => theme.colors.system.error };
  }

  &::placeholder {
    color: ${ ({ theme }) => theme.colors.typography.light };
  }
`
