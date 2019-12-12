import styled from 'styled-components'

export default styled.span`
  width: max-content;
  height: 24px;
  border-radius: 12px;
  font-size: 14px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.primary {
    color: ${ ({ theme }) => theme.colors.primary.dark };
    background: ${ ({ theme }) => theme.colors.primary.light };
  }
  &.success {
    color: ${ ({ theme }) => theme.colors.system.success };
    background: ${ ({ theme }) => theme.colors.system.successLight };
  }
  &.info {
    color: ${ ({ theme }) => theme.colors.system.ongoing };
    background: ${ ({ theme }) => theme.colors.system.ongoingLight };
  }
  &.warning {
    color: ${ ({ theme }) => theme.colors.system.attemptOngoing };
    background: ${ ({ theme }) => theme.colors.system.attemptOngoingLight };
  }
  &.error {
    color: ${ ({ theme }) => theme.colors.system.error };
    background: ${ ({ theme }) => theme.colors.system.errorLight };
  }
`
