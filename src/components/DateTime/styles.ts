import styled from 'styled-components'

export default styled.article`
  .input {
    display: flex;
    flex: 0 0 auto;
    width: 272px;
    position: relative;
    height: 40px;
    background: ${ ({ theme }) => theme.colors.grey.light };
    padding: 0 8px 0 12px;
    border-radius: 2px;
    border: 1.5px solid transparent;
    cursor: pointer;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    font-family: ${ ({ theme }) => theme.fontFamily };
    font-size: 14px;
  }
`
