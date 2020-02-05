import styled from 'styled-components'

export default styled.li`
  display: flex;
  flex-shrink: 0;
  font-size: 16px;
  font-family: ${ ({ theme }) => theme.fontFamily };
  background: ${ ({ theme }) => theme.colors.white };
  color: ${ ({ theme }) => theme.colors.typography.medium };
  height: 49px;
  padding: 0 16px;
  overflow: hidden;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${ ({ theme }) => theme.colors.grey.light };
    color: ${ ({ theme }) => theme.colors.primary.dark };
  }

  &.selected {
    background: ${ ({ theme }) => theme.colors.primary.light };
    color: ${ ({ theme }) => theme.colors.primary.dark };
  }

  &.disabled {
    background: ${ ({ theme }) => theme.colors.white };
    color: ${ ({ theme }) => theme.colors.typography.light };
  }

  .label {
    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }
`
