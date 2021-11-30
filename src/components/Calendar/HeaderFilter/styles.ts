import styled from 'styled-components'

export default styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 6px 0 rgba(66,74,97,0.12);
  background-color: ${ ({ theme }) => theme.colors.white };
  z-index: 95;
  position: sticky;
  top: 0;

  .date-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: ${ ({ theme }) => theme.colors.grey.light };
      height: 40px;
      width: 40px;
      border: none;
      cursor: pointer;
      transition: ease all 0.1s;

      &:hover {
        background-color: ${ ({ theme }) => theme.colors.grey.medium };
      }

      img {
        width: auto;
        height: 15px;
        position: relative;
        top: 1px;
      }

      &:first-of-type {
        margin-right: 2px;
        border-radius: 4px 0 0 4px;
      }

      &:last-of-type {
        margin-left: 2px;
        border-radius: 0 4px 4px 0;
      }
    }

    .date-select {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
      height: 40px;
      width: 311px;
      background-color: ${ ({ theme }) => theme.colors.grey.light };
      transition: ease all 0.1s;

      &:hover {
        background-color: ${ ({ theme }) => theme.colors.grey.medium };
      }

      .date-input {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;

        input {
          opacity: 0;
        }
      }

      .date {
        font-size: 16px;
        color: ${ ({ theme }) => theme.colors.typography.dark };
      }
    }
  }

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .tab {
      height: 56px;
      width: 160px;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;
      font-weight: normal;
      color: ${ ({ theme }) => theme.colors.typography.light };
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-bottom: 4px solid transparent;
      box-sizing: border-box;

      &.active {
        pointer-events: none;
        color: ${ ({ theme }) => theme.colors.primary.medium };
        border-bottom-color: ${ ({ theme }) => theme.colors.primary.medium };
        cursor: default;
      }
    }
  }
`
