import styled from 'styled-components'

const StyledButton = styled.button`
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
  position: relative;

  &:hover {
    background: ${ ({ theme }) => theme.colors.grey.dark };
    color: ${ ({ theme }) => theme.colors.typography.dark };
  }

  &.active {
    background: ${ ({ theme }) => theme.colors.grey.dark };
    color: ${ ({ theme }) => theme.colors.primary.dark };
  }

  &.button {
    background:  ${ ({ theme }) => theme.colors.primary.medium };
    color: ${ ({ theme }) => theme.colors.white };
    border-radius: 20px;
    max-height: 40px;

    &:hover {
      background:  ${ ({ theme }) => theme.colors.primary.dark };
    }
  }

  .icon {
    font-size: 24px;
  }

  .label {
    font-size: 16px;
    text-indent: 14px;
  }

  .dropdown-icon {
    font-size: 18px;
    position: absolute;
    right: 8px;
  }
`

const StyledList = styled.ul`
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  margin-bottom: 16px;

  &.open {
    height: auto;
  }

  li {
    font-family: ${ ({ theme }) => theme.fontFamily };
    font-size: 16px;
    font-weight: normal;
    color: ${ ({ theme }) => theme.colors.typography.light };
    padding-left: 32px;
    height: 40px;
    cursor: pointer;
    background: transparent;

    &:hover {
      color: ${ ({ theme }) => theme.colors.typography.medium };
      background: ${ ({ theme }) => theme.colors.grey.medium };
    }
  }
  
`
export { StyledButton, StyledList }
