import styled from 'styled-components'

export default styled.span`
  display: flex;
  flex: 0 0 auto;
  height: 24px;
  border-radius: 24px;
  font-size: 14px;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: ${ ({ theme }) => theme.fontFamily };

  &.primary {
    color: ${ ({ theme }) => theme.colors.primary.dark };
    background: ${ ({ theme }) => theme.colors.primary.light };
  }

  &.success {
    color: ${ ({ theme }) => theme.colors.system.success };
    background: ${ ({ theme }) => theme.colors.system.success }35;
  }
  &.info {
    color: ${ ({ theme }) => theme.colors.system.ongoing };
    background: ${ ({ theme }) => theme.colors.system.ongoing }35;
  }

  &.warning {
    color: ${ ({ theme }) => theme.colors.system.attemptOngoing };
    background: ${ ({ theme }) => theme.colors.system.attemptOngoing }35;
  }

  &.error {
    color: ${ ({ theme }) => theme.colors.system.error };
    background: ${ ({ theme }) => theme.colors.system.error }35;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
