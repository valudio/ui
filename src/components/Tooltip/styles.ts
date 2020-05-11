import styled from 'styled-components'

export default styled.section`
  font-family: ${ ({ theme }) => theme.fontFamily };
  position: absolute;
  background-color: ${ ({ theme }) => theme.colors.typography.dark }F5;
  color: ${ ({ theme }) => theme.colors.white };
  box-shadow: 0 2px 6px 0 ${ ({ theme }) => theme.colors.typography.dark }1F;
  border-radius: 4px;
  padding: 12px;

  &.hidden {
    display: none;
  }
`
