import styled, { keyframes } from 'styled-components'

const lazy = keyframes`
  from { background-color: $color5; }
  to { background-color: rgba(0, 0, 0, 0.02); }
`

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
    box-shadow: 0 -2px 6px 0 ${ ({ theme }) => theme.colors.typography.medium }1F;
    background: white;

    .options {
      display: block;
    }
  }

  &.disabled {
    cursor: not-allowed;
    background: ${ ({ theme }) => theme.colors.grey.medium };

    .selected {
      pointer-events: none;
      animation: ${ lazy } 0.8s linear 0s infinite alternate;
      color: ${ ({ theme }) => theme.colors.grey.light };
    }
  }

  &.invalid {
    color: ${ ({ theme }) => theme.colors.system.error };
    border: 1px solid currentColor;
    background: white;
    box-sizing: border-box;

    > .selected:empty:before {
      color: ${ ({ theme }) => theme.colors.system.error };
    }
  }

  > .selected {
    position: relative;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 14px;
    height: 100%;
    padding: 0 16px;
    align-items: center;
    height: 26px;
    box-sizing: border-box;
    outline: 0;
    width: 100%;

    &:empty:before {
      content: attr(data-text);
      color: ${ ({ theme }) => theme.colors.typography.light };
    }

    .label {
      color: ${ ({ theme }) => theme.colors.primary.dark };
      background: ${ ({ theme }) => theme.colors.primary.light };
      margin-left: 8px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    > * {
      pointer-events: none;
    }
  }

  .options {
    display: none;
    position: absolute;
    width: 100%;
    top: 40px;
    left: 0;
    padding: 0;
    margin: 0;
    background: white;
    box-shadow: 0 2px 6px 0 ${ ({ theme }) => theme.colors.typography.medium }1F;
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
      font-size: 14px;

      &:hover {
        background: ${ ({ theme }) => theme.colors.grey.medium };
        color: ${ ({ theme }) => theme.colors.typography.dark };
      }

      &.selected {
        background: ${ ({ theme }) => theme.colors.grey.light };
        color: ${ ({ theme }) => theme.colors.typography.dark };
      }

      .checkbox {
        margin: 0;
      }

      .label {
        margin: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }
`
