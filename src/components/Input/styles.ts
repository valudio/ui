import styled from 'styled-components'

export default styled.input`
  height: 40px;
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  background: ${ ({ theme }) => theme.colors.grey.light };
  text-indent: 12px;
  color: ${ ({ theme }) => theme.colors.typography.light };
  font-size: 14px;
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
  }

  &.invalid {
    background: ${ ({ theme }) => theme.colors.white };
    border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };
    color: ${ ({ theme }) => theme.colors.system.error };
  }
`
