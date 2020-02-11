import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background: ${ ({ theme }) => theme.colors.grey.dark };
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

  &.on {
    background: ${ ({ theme }) => theme.colors.primary.medium };

    &::before {
      margin: 4px 4px 4px auto;
    }

    &.disabled {
      background: ${ ({ theme }) => theme.colors.primary.medium }35;
    }
  }

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: ${ ({ theme }) => theme.colors.white };
    border-radius: 8px;
    margin: 4px auto 4px 4px;
  }

  &.disabled {
    cursor: not-allowed;

    &:not(.on) {
      border: 1px solid ${ ({ theme }) => theme.colors.grey.dark };
      background: ${ ({ theme }) => theme.colors.white };

      &::before {
        background: ${ ({ theme }) => theme.colors.grey.dark };
        margin: 3px auto 4px 4px;
      }
    }
  }
`
