import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  .hour-indicators {
    flex-basis: 34px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 14px 10px;
    grid-gap: 10px;
    grid-auto-flow: row;

    .hours {
      display: grid;
      grid-template-rows: 30px repeat(15, 60px);
      grid-template-columns: 14px;
      grid-gap: 0;
      grid-auto-flow: column;

      .hour {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: 10px;

        > span {
          font-size: 12px;
          text-align: right;
          line-height: 20px;
          position: relative;
          top: 9px;
          color: ${ ({ theme }) => theme.colors.typography.dark };
        }
      }
    }

    .spaces {
      display: grid;
      grid-template-rows: 30px repeat(15, 60px);
      grid-template-columns: 24px;
      grid-gap: 0;
      grid-auto-flow: column;

      .space {
        border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey.dark };
      }
    }
  }

  .weekdays {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    grid-auto-flow: row;

    .day {
      display: grid;
      grid-template-rows: repeat(62, 15px);
      grid-template-columns: 1fr;
      grid-gap: 0px;
      grid-auto-flow: column;
      box-sizing: border-box;
      border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey.dark };
      border-right: 0.5px solid ${ ({ theme }) => theme.colors.grey.dark };
      border-left: 0.5px solid ${ ({ theme }) => theme.colors.grey.dark };

      &:first-of-type {
        border-left-width: 1px;
      }

      &:last-of-type {
        border-right-width: 1px;
      }

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
`
