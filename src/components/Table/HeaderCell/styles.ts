import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex: 1;
  margin: 0 16px;
  overflow: hidden;

  .label {
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.medium };
    font-size: 14px;
    margin: 0 14px 0 0;
  }

  .sort {
    &::before {
      color: ${ ({ theme }) => theme.colors.typography.medium };
    }

    &.ASC::before {
      content: '\\21A5';
    }

    &.DESC::before {
      content: '\\21A7';
    }

    &.INACTIVE::before {
      content: '\\21A7';
      color: ${ ({ theme }) => theme.colors.typography.medium }35;
    }
  }
`
