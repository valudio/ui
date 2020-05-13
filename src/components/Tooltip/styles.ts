import styled from 'styled-components'

export default styled.section`
  transition: all 0.2s;
  font-family: ${ ({ theme }) => theme.fontFamily };
  position: fixed;
  left: 0;
  display: block;
  background-color: ${ ({ theme }) => theme.colors.typography.dark }F5;
  color: ${ ({ theme }) => theme.colors.white };
  box-shadow: 0 2px 6px 0 ${ ({ theme }) => theme.colors.typography.dark }1F;
  border-radius: 4px;
  padding: 12px;
  z-index: 9999;
  visibility: hidden;

  &.hidden {
    display: none;
  }
`
