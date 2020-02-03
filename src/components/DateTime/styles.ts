import styled from 'styled-components'

export default styled.article`
  .input {
    display: flex;
    flex: 0 0 auto;
    width: 272px;
    position: relative;
    height: 40px;
    background: ${ ({ theme }) => theme.colors.grey.light };
    padding: 0 8px 0 12px;
    border-radius: 2px;
    border: 1.5px solid transparent;
    cursor: pointer;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    font-family: ${ ({ theme }) => theme.fontFamily };
    font-size: 14px;
    box-sizing: border-box;
  }

  table thead th {
    color: ${ ({ theme }) => theme.colors.primary.medium } !important;
  }

  table tbody {
    td._1PHXZRv9_4KmFMrk8q46oq {
      background-color: ${ ({ theme }) => theme.colors.primary.light } !important;
      color: ${ ({ theme }) => theme.colors.primary.dark } !important;
    }
    td._2CQ5vWlIzMzWrunFH0Ghn9 {
      color: ${ ({ theme }) => theme.colors.primary.medium } !important;
    }
  }
`
