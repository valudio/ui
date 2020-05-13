import styled from 'styled-components'

export default styled.section`
  transition: visibility 0.2s, opacity 0.1s ease-in;
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
  opacity: 0;

  &.hidden {
    display: none;
  }
`
