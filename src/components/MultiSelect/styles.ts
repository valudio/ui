import styled from 'styled-components'

export default styled.article`
  height: 40px;
  max-width: 400px;
  width: calc(100% - 2px);
  position: relative;
  display: flex;
  flex: auto 0 0;
  flex-shrink: 0;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  box-sizing: border-box;
  align-items: center;
  padding: 0;
  margin: 0;
  background: ${ ({ theme }) => theme.colors.grey.light };

  &.opened {
    border-bottom-color: ${ ({ theme }) => theme.colors.grey.medium };

    .options {
      display: block;
    }
  }

  @keyframes lazy {
    from { background-color: $color5; }
    to { background-color: rgba(0, 0, 0, 0.02); }
  }

  &.disabled {
    cursor: not-allowed;

    .selected {
      pointer-events: none;
      background: $color5;
      border-color: $color5;
      animation: lazy 0.8s linear 0s infinite alternate;
      color: transparent;
    }
  }

  > .selected {
    position: relative;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 0.8em;
    height: 100%;
    padding: 0 16px;
    align-items: center;
    height: 26px;
    border: 0.5px solid $color4;
    box-sizing: border-box;
    outline: 0;
    width: 100%;

    .label {
      text-indent: 8px;
      font-weight: 200;
      color: $color3;
    }

    > * {
      pointer-events: none;
    }

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid $color0;
      margin: 0 0 0 10px;
    }
  }

  .options {
    display: none;
    position: absolute;
    width: 100%;
    top: 39px;
    left: 0;
    padding: 0;
    margin: 0;
    background: white;
    box-shadow: 0 2px 8px 0 $color6;
    z-index: 100;
    width: 100%;
    max-height: 50vh;
    overflow-y: auto;

    .option {
      display: flex;
      height: 40px;
      padding: 0 10px;
      align-items: center;
      cursor: pointer;
      color: #687494;
      font-size: 0.8em;

      &:hover {
        background: ${ ({ theme }) => theme.colors.grey.medium };
        color: ${ ({ theme }) => theme.colors.typography.dark };
      }

      &.selected, &:hover {
        background: ${ ({ theme }) => theme.colors.grey.light };
        color: ${ ({ theme }) => theme.colors.typography.dark };
      }

      .checkbox {
        margin: 0;
      }

      .label {
        margin: 0 0 0 10px;
      }
    }
  }
`
