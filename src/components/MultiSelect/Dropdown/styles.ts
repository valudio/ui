import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 49px;
  right: 0;
  left: 0;
  box-shadow: 0 2px 6px 0 rgba(104, 116, 148, 0.12);
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
  background: ${ ({ theme }) => theme.colors.white };
  z-index: 100;

  .bulk-select {
    position: absolute;
    font-size: 14px;
    font-family: ${ ({ theme }) => theme.fontFamily };
    top: 8px;
    right: 8px;
    border: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
    border-radius: 2px;
    text-align: center;
    height: 24px;
    background: ${ ({ theme }) => theme.colors.white };
    cursor: pointer;
    outline: 0;
  }

  .input {
    display: flex;
    height: 40px;
    outline: 0;
    text-indent: 13px;
    font-size: 14px;
    color: ${ ({ theme }) => theme.colors.typography.light };
    font-family: ${ ({ theme }) => theme.fontFamily };
    margin: 0;
    border: 0;
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
    box-sizing: border-box;
  }

  .options {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 240px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`
