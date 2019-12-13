import styled from 'styled-components'

export default styled.div`
  height: 10px;
  border-radius: 10px;
  width: 10px;

  &.primary {
    background: ${ ({ theme }) => theme.colors.primary.light };
  }

  &.success {
    background: ${ ({ theme }) => theme.colors.system.success };
  }
  &.info {
    background: ${ ({ theme }) => theme.colors.system.ongoing };
  }

  &.warning {
    background: ${ ({ theme }) => theme.colors.system.attemptOngoing };
  }

  &.error {
    background: ${ ({ theme }) => theme.colors.system.error };
  }
`
