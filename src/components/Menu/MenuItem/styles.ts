import styled from 'styled-components'

export default styled.button`
  display: flex;
  margin: 0 4px;
  padding: 8px;
  height: 40px;
  background: transparent;
  border: none;
  color: ${ ({ theme }) => theme.colors.typography.medium };
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  font-family: ${ ({ theme }) => theme.fontFamily };

  &:hover {
    background: ${ ({ theme }) => theme.colors.grey.dark };
    color: ${ ({ theme }) => theme.colors.primary.medium };
  }

  .icon {
    font-size: 24px;
  }

  .label {
    font-size: 14px;
    text-indent: 14px;
  }
`