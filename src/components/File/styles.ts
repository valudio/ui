import styled from 'styled-components'

export default styled.div`
  flex: 1;
  display: flex;
  height: 32px;
  border-radius: 32px;
  border: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
  padding: 0 10px;
  align-items: center;
  justify-content: flex-start;
  background: ${ ({ theme }) => theme.colors.white };
  cursor: pointer;

  .icon {
    margin-right: 5px;
  }

  .name {
    font-size: 14px;
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.medium };
    text-align: left;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
