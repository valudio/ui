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
    border: none;
    outline: 0;
    margin: 0;
    padding: 0;
    background: #F6F6F9;
    text-indent: 12px;
    color: #9FABCB;
    font-size: 14px;
    max-width: 400px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #008BF8;
      background: #FFFFFF;
      color: #687494;
    }

    &:disabled {
      color: #9FABCB;
      background: #E8EBF2;
    }
  }

  &.invalid .input {
    background: #FFFFFF;
    border: 1px solid #D92D52;
    color: #D92D52;
  }
`
