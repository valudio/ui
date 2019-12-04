import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  font-family: 'Fira Sans', sans-serif;

  .label {
    margin: 0 0 6px;
    font-size: 14px;
    color: #687494;
  }

  &.disabled .label {
    color: #9FABCB;
  }

  .input {
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    outline: 0;
    margin: 0;
    padding: 0;
    background: #F6F6F9;
    text-indent: 12px;
    color: #424A61;
    font-size: 14px;
    max-width: 400px;
    box-sizing: border-box;

    &:focus {
      border-color: #008BF8;
      background: #FFFFFF;
      color: #687494;
    }

    &:disabled {
      color: #9FABCB;
      background: #E8EBF2;
    }

    &::placeholder {
      color: #9FABCB;
    }
  }

  &.invalid .input {
    background: #FFFFFF;
    border-color: #D92D52;
    color: #D92D52;
  }
`
