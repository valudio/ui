import styled from 'styled-components'

export default styled.article`
  display: flex;
  position: fixed;
  background: ${ ({ theme }) => theme.colors.typography.darkest }50;
  position: fixed;
  flex-direction: column;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .frame {
    background: white;
    width: 704px;
    border-radius: 4px;
    padding: 16px 8px;
    box-shadow: 0 4px 10px 0 rgba(66, 74, 97, 0.15)
  }
`
