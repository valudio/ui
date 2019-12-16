import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.disabled {
    pointer-events: none;

    .check__container,
    .icon {
      cursor: not-allowed;
    }
  }

  .icon {
    color: $blue;
    cursor: pointer;
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
  }

  .check__container {
    position: relative;
    height: 20px;
    width: 20px;
    background-color: ${ ({ theme }) => theme.colors.grey.dark };
    border-radius: 2px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  &.checked {
    .icon {
      opacity: 1;
      color: white;

      &:hover + .check__container {
        background-color: ${ ({ theme }) => theme.colors.primary.dark };
      }
    }

    .check__container {
      background-color: ${ ({ theme }) => theme.colors.primary.medium };

      &:hover {
        background-color: ${ ({ theme }) => theme.colors.primary.dark };
      }
    }
  }

  &:hover:not(.checked) {
    .icon {
      opacity: 1;
      color: ${ ({ theme }) => theme.colors.primary.medium };
    }
  }
`
