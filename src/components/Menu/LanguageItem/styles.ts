import styled from 'styled-components'

export default styled.section`
  display: flex;
  position: relative;

  .options {
    position: absolute;
    width: 120px;
    bottom: 0;
    left: 100%;
    margin: auto;
    padding: 0;
    list-style: none;
    background: ${ ({ theme }) => theme.colors.white };
    border: 1px solid ${ ({ theme }) => theme.colors.grey.medium };
    border-radius: 2px;

    &::before {
      content: '';
      width: 0px;
      height: 0px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 5px solid ${ ({ theme }) => theme.colors.white };
      position: absolute;
      left: -5px;
      bottom: 15px;
    }

    .option {
      padding: 10px 16px;
      font-size: 14px;
      font-family: ${ ({ theme }) => theme.fontFamily };
      cursor: pointer;
      color: ${ ({ theme }) => theme.colors.typography.medium };

      &:hover {
        background: ${ ({ theme }) => theme.colors.grey.light };
        color: ${ ({ theme }) => theme.colors.primary.medium };
      }
    }
  }
`
