import styled from 'styled-components'

export default styled.button`
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 5px 20px;
  font-family: 'Fira Sans', sans-serif;
  background: #008BF8;
  color: #FFFFFF;
  border-radius: 20px;
  height: 40px;
  width: 200px;
  border: none;
  font-size: 14px;

  &.secondary {
    border: 1px solid #008BF8;
    color: #008BF8;
    background: white;
  }

  &:hover {
    background: #006DD5;
    color: #FFFFFF;
  }

  &:active {
    background: #008BF8;
    color: #FFFFFF;
  }

  &:disabled {
    background: #F6F6F9;
    color: #9FABCB;
  }
`
