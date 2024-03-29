import styled from 'styled-components'

export default styled.div`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background-color: ${ ({ theme }) => theme.colors.grey.dark };
  border-radius: 2px;
  box-sizing: border-box;
  //border: 1px solid transparent;

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  .icon {
    cursor: pointer;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 20px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }

  &.checked {
    background-color: ${ ({ theme }) => theme.colors.primary.medium };

    &:hover {
      background-color: ${ ({ theme }) => theme.colors.primary.dark };
    }

    .icon {
      opacity: 1;
      color: ${ ({ theme }) => theme.colors.white };
    }
  }

  &:hover:not(.checked) {
    .icon {
      opacity: 1;
      color: ${ ({ theme }) => theme.colors.primary.medium };
    }
  }
`
