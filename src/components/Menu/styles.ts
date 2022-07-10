import styled from 'styled-components'

export default styled.article`
  display: flex;
  width: 64px;
  height: 100vh;
  flex-shrink: 0;

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

    .header {
      flex-basis: 100px;
      padding: 6px 6px 0;
      border: 0;
      cursor: pointer;
      font-size: 24px;
      align-items: flex-start;
      justify-content: center;
      display: flex;

      .logo {
        font-size: 24px;
        flex: 0;
        border: 1px solid transparent;
        background-color: transparent;
        z-index: 2000;
        min-width: 100%;
        height: 100%;

       > img {
          height: auto;
          max-width: 100%;
          width: 100%;
          flex: 1;
        }

        > i.menu {
          min-height: 48px;
        }
      }
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
      margin: 16px 4px 0;

      &.sign-out {
        pointer-events: initial;
      }

      .icon {
        font-size: 22px;
      }

      .label {
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  @media only screen and (max-width: 736px) {
    .menu {
      position: fixed;
    }

    .wrapper {
      display: none;

      &.expanded {
        display: flex;
        width: 75vw;
      }
    }
  }

`
