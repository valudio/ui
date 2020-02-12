import styled from 'styled-components'

export default styled.article`
  display: flex;
  position: relative;
  flex: 0 0 auto;
  width: 184px;
  height: 40px;
  border-radius: 4px;
  background: ${ ({ theme }) => theme.colors.grey.light };
  font-family: ${ ({ theme }) => theme.fontFamily };
  color: ${ ({ theme }) => theme.colors.typography.light };
  align-items: center;
  padding: 0px 8px 0px 12px;
  cursor: pointer;
  border: 1px solid transparent;

  &.disabled {
    background: ${ ({ theme }) => theme.colors.grey.light };
    color: ${ ({ theme }) => theme.colors.typography.light };
    cursor: not-allowed;
  }

  &.filled {
    background: ${ ({ theme }) => theme.colors.grey.light };
  }

  &.active {
    border-color: ${ ({ theme }) => theme.colors.primary.medium };
    background: ${ ({ theme }) => theme.colors.white };
  }

  &.invalid {
    border-color: ${ ({ theme }) => theme.colors.system.error };
    color: ${ ({ theme }) => theme.colors.system.error };
    background: ${ ({ theme }) => theme.colors.white };
  }

  &:hover:not(.disabled):not(.active):not(.invalid) {
    background: ${ ({ theme }) => theme.colors.grey.medium };
    color: ${ ({ theme }) => theme.colors.typography.medium };
  }

  .value {
    display: flex;
    flex: 1 1 0%;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 5px 0 0;
    color: ${ ({ theme }) => theme.colors.typography.dark };
    background: transparent;
    border: none;
    box-shadow: none;
    pointer-events: none;
  }
`
