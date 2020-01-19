import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  font-family: ${ ({ theme }) => theme.fontFamily };

  .label {
    margin: 0 0 6px;
    font-size: 14px;
    color: ${ ({ theme }) => theme.colors.typography.medium };
  }

  &.disabled .label {
    color: ${ ({ theme }) => theme.colors.typography.light };
  }
`
