import styled from 'styled-components'

export default styled.div`
  position: relative;
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.white };
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;

  &:nth-child(4n+2) {
    border-bottom-color: ${ ({ theme }) => theme.colors.grey.dark };
  }

  .create-pill {
    width: calc(100% - 10px);
    height: 15px;
    background-color: ${ ({ theme }) => theme.colors.primary.light };
    border-radius: 6px;
    opacity: 0;
    flex: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      line-height: 15px;
      color: ${ ({ theme }) => theme.colors.primary.medium };
      position: relative;
      bottom: 2px;
    }
  }

  .event-pill {
    width: calc(100% - 10px);
    min-height: 15px;
    background-color: ${ ({ theme }) => theme.colors.primary.medium };
    border-radius: 6px;
    opacity: 0.85;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1px 6px;

    h6 {
      margin: 0 2px 0 0;
      font-size: 10px;
      font-weight: normal;
      letter-spacing: 0;
      /* line-height: 12px; */
      color: ${ ({ theme }) => theme.colors.white };
    }

    span {
      line-height: 15px;
      color: ${ ({ theme }) => theme.colors.white };
      position: relative;
      bottom: 2px;
      font-size: 10px;
      letter-spacing: 0;
      /* line-height: 12px; */
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &:hover {
    .create-pill {
      opacity: 1;
      flex: 1;
    }
  }
`
