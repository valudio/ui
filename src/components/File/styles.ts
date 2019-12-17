import styled from 'styled-components'

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .file {
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
  }

  .transference {
    font-size: 24px;
    color: ${ ({ theme }) => theme.colors.typography.light };
    margin-left: 6px;
  }
`
