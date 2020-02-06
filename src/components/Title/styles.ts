import styled from 'styled-components'

export default styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${ ({ theme }) => theme.colors.typography.dark };
  font-family: ${ ({ theme }) => theme.fontFamily };
`
