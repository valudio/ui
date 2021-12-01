import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  position: sticky;
  top: 96px;
  background-color: ${ ({ theme }) => theme.colors.grey.light };
  z-index: 10;

  .hour-divider {
    flex-basis: 34px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 14px 10px;
    grid-gap: 10px;
    grid-auto-flow: row;

    .space {
      border-bottom: 2px solid ${ ({ theme }) => theme.colors.grey.dark };
    }
  }

  .weekdays {
    flex: 1;
    display: grid;
    grid-template-rows: 38px;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 0;
    grid-auto-flow: row;
    padding-top: 40px;

    .weekday {
      font-family: ${ ({ theme }) => theme.fontFamily };
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: ${ ({ theme }) => theme.colors.typography.darkest };
      border-bottom: 2px solid ${ ({ theme }) => theme.colors.grey.dark };
      border-right: 0.5px solid ${ ({ theme }) => theme.colors.grey.dark };
      border-left: 0.5px solid ${ ({ theme }) => theme.colors.grey.dark };

      &:first-of-type {
        border-left-width: 1px;
      }

      &:last-of-type {
        border-right-width: 1px;
      }

      h4 {
        font-size: 16px;
        letter-spacing: 0;
        line-height: 16px;
        text-align: center;
        margin: 0;
        font-weight: normal;
        text-transform: uppercase;
        margin-bottom: 2px;
      }

      p {
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 24px;
        margin: 0;
        min-height: 32px;
        min-width: 40px;
        width: auto;
        background-color: transparent;
        border-radius: 20px;
        padding: 8px;
        box-sizing: border-box;
        text-align: center;
      }

      &.active {
        p {
          color: ${ ({ theme }) => theme.colors.white };
          background-color: ${ ({ theme }) => theme.colors.primary.medium };
        }
      }
    }
  }


  &.week {
    .weekdays {
      grid-template-rows: 68px;
    }
  }

  &.day {
    .weekdays {
      grid-template-rows: 68px;
      grid-template-columns: 1fr;
    }
  }
`
