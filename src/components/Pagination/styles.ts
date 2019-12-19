import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin: 0 8px;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    background: ${ ({ theme }) => theme.colors.white };
    border: 1px solid ${ ({ theme }) => theme.colors.grey.light };
    cursor: pointer;
    font-size: 22px;
  }
`
