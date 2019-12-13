import styled from 'styled-components'

export default styled.div`
  display: flex;
  height: 32px;
  border-radius: 32px;
  border: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
  padding: 0 28px 0 8px;
  align-items: center;
  justify-content: center;
  background: ${ ({ theme }) => theme.colors.white };
  cursor: pointer;

  .name {
    font-size: 14px;
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.medium };
    text-transform: uppercase;
  }
`
