import styled from 'styled-components'

export default styled.button`
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 5px 20px;
  font-family: ${ ({ theme }) => theme.fontFamily };
  background: ${ ({ theme }) => theme.colors.primary.medium };
  color: ${ ({ theme }) => theme.colors.white };
  border-radius: 20px;
  height: 40px;
  width: 200px;
  border: none;
  font-size: 14px;

  &.secondary {
    border: 1px solid ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.primary.medium };
    background: ${ ({ theme }) => theme.colors.white };
  }

  &:hover {
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
`
