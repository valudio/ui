import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 100vh;
  background: ${ ({ theme }) => theme.colors.grey.medium };
  padding: 8px 8px 28px;
  box-sizing: border-box;

  &.expanded {
    width: 200px;
  }

  .logo {
    height: 48px;
    margin: 0 0 56px;
    background: white;
    border-radius: 2px;
    border: 0;
    cursor: pointer;
  }

  .items {
    display: flex;
    flex-direction: column;
    margin: 0 0 auto;

    .item {
      flex: 1;
      margin-bottom: 16px;
    }
  }

  .username {
    pointer-events: none;
    margin: 16px 0 0;
  }
`
