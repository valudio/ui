import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;

  .header {
    display: flex;
    flex-direction: row;
    margin: 0 0 14px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .fallback-message {
    font-family: ${ ({ theme }) => theme.fontFamily };
    color: ${ ({ theme }) => theme.colors.typography.medium };
    font-size: 14px;
    text-align: center;
    padding: 40px 0 20px;
  }
`
