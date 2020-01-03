import styled from 'styled-components'

export default styled.article`
  display: flex;
  width: 64px;
  height: 100vh;

  .wrapper {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    background: ${ ({ theme }) => theme.colors.grey.medium };
    padding: 8px 8px 28px;
    box-sizing: border-box;
    z-index: 50;
    width: 64px;

    &.expanded {
      width: 200px;
      box-shadow: 2px 0 2px 1px rgba(66,74,97,0.12);
    }

    .logo {
      min-height: 48px;
      margin: 0 0 56px;
      border: 0;
      cursor: pointer;
      font-size: 24px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex: 0;
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
      .icon {
        font-size: 22px;
      }
    }
  }
`
