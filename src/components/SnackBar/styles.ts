import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 216px;
  height: 40px;
  border-radius: 4px;
  padding: 0 8px;
  box-shadow: 0 2px 6px 0 rgba(66, 74, 97, 0.12);
  align-items: center;
  font-family: ${ ({ theme }) => theme.fontFamily };
  white-space: nowrap;

  &.info {
    color: ${ ({ theme }) => theme.colors.primary.dark };
    background: ${ ({ theme }) => theme.colors.primary.dark }35;
  }

  &.success {
    color: ${ ({ theme }) => theme.colors.system.success };
    background: ${ ({ theme }) => theme.colors.system.success }35;
  }

  &.warning {
    color: ${ ({ theme }) => theme.colors.system.attemptOngoing };
    background: ${ ({ theme }) => theme.colors.system.attemptOngoing }35;
  }

  &.error {
    color: ${ ({ theme }) => theme.colors.system.error };
    background: ${ ({ theme }) => theme.colors.system.error }35;
  }

  .icon {
    font-size: 24px;
    margin: 0 8px 0 0;
  }

  .message {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
