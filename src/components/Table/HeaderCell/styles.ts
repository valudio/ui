import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex: 1;
  margin: 0 16px;
  overflow: hidden;
  cursor: pointer;
  align-items: center;

  .label {
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.medium };
    font-size: 14px;
    margin: 0 14px 0 0;
  }

  .sort {
    font-size: 22px;

    &::before {
      color: ${ ({ theme }) => theme.colors.typography.medium };
    }

    &.INACTIVE::before {
      color: ${ ({ theme }) => theme.colors.typography.medium }35;
    }
  }
`
