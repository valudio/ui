import styled from 'styled-components'

export default styled.article`
  font-family: ${ ({ theme }) => theme.fontFamily };
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* REMOVED CALENDAR SCROLL */
  flex: 1;

  .loading-container {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-view {
    padding: 0 20px 20px;
    box-sizing: border-box;
    background-color: ${ ({ theme }) => theme.colors.grey.light };
    width: 100%;
    height: 100%;
    /* REMOVED CALENDAR SCROLL */
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch; */
  }
`