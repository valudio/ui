import styled from 'styled-components'

const height = 40

export default styled.article`
  display: flex;
  flex: 0 0 auto;
  width: 272px;
  position: relative;
  height: ${ height }px;
  background: ${ ({ theme }) => theme.colors.grey.light };
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 12px;

  .values {
    display: flex;
    flex-direction: row;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 8px 0 0;

    .placeholder {
      color: ${ ({ theme }) => theme.colors.typography.light };
      font-family: ${ ({ theme }) => theme.fontFamily };
      user-select: none;
    }

    .value {
      margin: 0 8px 0 0;
    }
  }

  /* &.opened {
    border-bottom-color: ${ ({ theme }) => theme.colors.grey.medium };
    box-shadow: 0 -2px 6px 0 ${ ({ theme }) => theme.colors.typography.medium }1F;
    background: white;
  }

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
    background: ${ ({ theme }) => theme.colors.grey.medium };

    .values {
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

    .icon {
      color: ${ ({ theme }) => theme.colors.system.error };
    }

    > .values:empty:before {
      color: ${ ({ theme }) => theme.colors.system.error };
    }

    .values .label {
      color: ${ ({ theme }) => theme.colors.system.error };
      background: ${ ({ theme }) => theme.colors.system.error }35;
    }
  }

  .values {
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

    &:empty::before {
      content: attr(data-text);
      color: ${ ({ theme }) => theme.colors.typography.light };
      font-family: ${ ({ theme }) => theme.fontFamily };
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

  .icon:not(.check) {
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
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: ${ height + 9 }px;
    left: 0;
    padding: 0;
    margin: 0;
    background: white;
    box-shadow: 0 2px 6px 0 ${ ({ theme }) => theme.colors.typography.medium }35;
    z-index: 100;
    width: 100%;
    max-height: 50vh;
    overflow-y: auto;
    border-radius: 2;

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

      &.values {
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
  } */
`
