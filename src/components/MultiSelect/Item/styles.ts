import styled from 'styled-components'

export default styled.li`
  display: flex;
  flex-shrink: 0;
  height: 40px;
  padding: 0 0 0 8px;
  align-items: center;
  cursor: pointer;
  color: ${ ({ theme }) => theme.colors.typography.medium };

  &.selected {
    color: ${ ({ theme }) => theme.colors.typography.dark };
    background: ${ ({ theme }) => theme.colors.grey.light };
  }

  .checkbox {
    margin: 0 8px 0 0;
    pointer-events: none;
  }

  .label {
    font-size: 14px;
    font-family: ${ ({ theme }) => theme.fontFamily };
    pointer-events: none;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    color: ${ ({ theme }) => theme.colors.typography.dark };
    background: ${ ({ theme }) => theme.colors.grey.medium };
  }
`
