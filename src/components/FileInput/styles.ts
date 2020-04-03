import styled from 'styled-components'

export default styled.div`
  height: 40px;
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  background: ${ ({ theme }) => theme.colors.grey.light };
  font-family: ${ ({ theme }) => theme.fontFamily };
  max-width: 400px;
  box-sizing: border-box;
  border: none;
  display: flex;

  input.name {
    text-indent: 12px;
    color: ${ ({ theme }) => theme.colors.typography.dark };
    font-size: 16px;
    outline: 0;
    margin: 0;
    padding: 0;
    padding-right: 12px;
    border: 1.5px solid transparent;
    height: 40px;
    background-color: transparent;
    box-sizing: border-box;
  }

  button {
    height: 40px;
    width: 40px;
    border-color: transparent;
    color: ${ ({ theme }) => theme.colors.white };
    background: ${ ({ theme }) => theme.colors.primary.medium };
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;

    &:not(:disabled) {
      &:hover {
        background: ${ ({ theme }) => theme.colors.primary.dark };
        color: ${ ({ theme }) => theme.colors.white };
      }
    }
  }

  &.disabled {
    input.name {
      color: ${ ({ theme }) => theme.colors.typography.light };
      background: ${ ({ theme }) => theme.colors.grey.medium };
      cursor: not-allowed;
    }

    button:disabled {
      background: ${ ({ theme }) => theme.colors.grey.medium };
      color: ${ ({ theme }) => theme.colors.typography.light };
      cursor: not-allowed;
    }
  }

  &.invalid {
    input.name {
      background: ${ ({ theme }) => theme.colors.white };
      border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };
      color: ${ ({ theme }) => theme.colors.system.error };
    }

    button {
      background: ${ ({ theme }) => theme.colors.system.error };
      border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };
      /* color: ${ ({ theme }) => theme.colors.system.error };
      background: ${ ({ theme }) => theme.colors.grey.medium };
      color: ${ ({ theme }) => theme.colors.typography.light };
      cursor: not-allowed; */
    }
  }
`
