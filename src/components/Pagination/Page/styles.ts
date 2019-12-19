import styled from 'styled-components'

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  color: ${ ({ theme }) => theme.colors.typography.dark };
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  &.current {
    background: ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.white };
  }
`
