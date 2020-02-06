import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-direction: row;
  background: ${ ({ theme }) => theme.colors.white };
  border-radius: 4px;
  margin: 0 0 8px;
  padding: 8px 0;
  min-height: 64px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 2px 6px 0 rgba(66, 74, 97, 0.12);
  }

  .cell {
    display: flex;
    flex-direction: column;
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.dark };
    margin: 0 16px;
    flex: 1;
    font-size: 16px;
    overflow: hidden;
    justify-content: center;
  }
`
