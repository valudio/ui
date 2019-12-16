import styled from 'styled-components'

export default styled.article`
  font-family: ${ ({ theme }) => theme.fontFamily };
  height: 40px;
  max-width: 400px;
  width: calc(100% - 2px);
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: auto 0 0;
  flex-shrink: 0;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: ${ ({ theme }) => theme.colors.grey.light };
  cursor: pointer;

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
    pointer-events: none;
    background: ${ ({ theme }) => theme.colors.grey.medium };

    .selected {
      color: ${ ({ theme }) => theme.colors.grey.light };

      .label {
        color: ${ ({ theme }) => theme.colors.typography.medium };
        background: ${ ({ theme }) => theme.colors.grey.dark };
      }
    }
  }

  &.invalid {
    color: ${ ({ theme }) => theme.colors.system.error };
    border: 1px solid currentColor;
    background: white;
    box-sizing: border-box;

    .dropdown-icon {
      color: ${ ({ theme }) => theme.colors.system.error };
    }

    > .selected:empty:before {
      color: ${ ({ theme }) => theme.colors.system.error };
    }

    .selected .label {
      color: ${ ({ theme }) => theme.colors.system.error };
      background: ${ ({ theme }) => theme.colors.system.error }35;
    }
  }

  > .selected {
    position: relative;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 14px;
    padding: 0 16px;
    align-items: center;
    height: 26px;
    box-sizing: border-box;
    outline: 0;
    height: 100%;
    width: calc(100% - 40px);
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

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

  .dropdown-icon {
    margin-left: auto;
    width: 40px;
    height: 100%;
    font-size: 24px;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
