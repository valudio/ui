import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${ ({ theme }) => theme.colors.grey.medium };
  cursor: pointer;
  overflow: hidden;

  &.on {
    background: ${ ({ theme }) => theme.colors.primary.medium };

    &::before {
      margin: 2px 2px 2px auto;
    }
  }

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background: ${ ({ theme }) => theme.colors.white };
    border-radius: 8px;
    margin: 2px auto 2px 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  &.disabled {
    cursor: not-allowed;
    background: ${ ({ theme }) => theme.colors.grey.medium };

    &::before {
      background: ${ ({ theme }) => theme.colors.grey.dark };
      box-shadow: none;
    }
  }
`
