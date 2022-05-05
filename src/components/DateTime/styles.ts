import styled from 'styled-components'

export default styled.article`
  .react-datepicker {
    font-family: ${ ({ theme }) => theme.fontFamily } !important;
	  border-radius: 4px;
	  border: 1px solid ${ ({ theme }) => theme.colors.grey.light };
	  background-color: ${ ({ theme }) => theme.colors.white };
    color: ${ ({ theme }) => theme.colors.typography.dark };
    box-shadow: 0px 2px 6px rgba(66, 74, 97, 0.12);
  }

	.react-datepicker__triangle {
		display: none;
	}

  .react-datepicker__header {
    background-color: ${ ({ theme }) => theme.colors.white };
    border-top-left-radius: 4px;
	  border-bottom: none;
	  padding: 24px 0 8px;
  }

  .react-datepicker__navigation {
	  top: 20px;
  }

  .react-datepicker__navigation-icon {
	  top: 0;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: ${ ({ theme }) => theme.colors.typography.medium };
    border-style: solid;
    border-width: 2px 2px 0 0;
  }

  .react-datepicker__current-month, .react-datepicker-year-header {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    margin-bottom: 24px;
  }

  .react-datepicker-time__header {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${ ({ theme }) => theme.colors.typography.medium };
    margin-bottom: 16px;
  }

  .react-datepicker__day-names {
	  margin-bottom: 0;
  }

	.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    color: ${ ({ theme }) => theme.colors.typography.dark };
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
	}

  .react-datepicker__day-name {
	  width: 40px;
  }

	.react-datepicker__day {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		transition: ease-in-out all 100ms;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
		margin: 0;

		&.react-datepicker__day--today {
      color: ${ ({ theme }) => theme.colors.primary.dark };
		}

		&.react-datepicker__day--selected,
		&.react-datepicker__day--keyboard-selected {
			color: ${ ({ theme }) => theme.colors.white };
			background-color: ${ ({ theme }) => theme.colors.primary.medium };

      &:hover {
        color: ${ ({ theme }) => theme.colors.white };
        background-color: ${ ({ theme }) => theme.colors.primary.dark };
      }
		}
		
		&.react-datepicker__day--disabled {
			color: ${ ({ theme }) => theme.colors.typography.light };
			pointer-events: none;
		}

		&:hover {
			color: ${ ({ theme }) => theme.colors.primary.dark };
			background-color: ${ ({ theme }) => theme.colors.grey.light };
		}
	}

  .react-datepicker__time-container {
	  border-left: 1px solid ${ ({ theme }) => theme.colors.grey.light };
  }

	.react-datepicker__time-list-item {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: ${ ({ theme }) => theme.colors.typography.medium };
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 48px;

		&.react-datepicker__time-list-item--selected {
      color: ${ ({ theme }) => theme.colors.primary.dark } !important;
      background-color: ${ ({ theme }) => theme.colors.white } !important;
		}

		&:hover {
      color: ${ ({ theme }) => theme.colors.primary.dark };
      background-color: ${ ({ theme }) => theme.colors.grey.light };
		}
	}

  .react-datepicker__input-container {
	  input {
		  height: 40px;
		  outline: 0;
		  margin: 0;
		  padding: 0;
		  background: ${ ({ theme }) => theme.colors.grey.light };
		  text-indent: 12px;
		  font-family: ${ ({ theme }) => theme.fontFamily };
		  color: ${ ({ theme }) => theme.colors.typography.dark };
		  font-size: 16px;
		  max-width: 400px;
		  box-sizing: border-box;
		  border: 1.5px solid transparent;

		  &:focus {
		    border: 1.5px solid ${ ({ theme }) => theme.colors.primary.medium };
		    background: ${ ({ theme }) => theme.colors.white };
		    color: ${ ({ theme }) => theme.colors.typography.medium };
		  }

		  &:disabled {
		    color: ${ ({ theme }) => theme.colors.typography.light };
		    background: ${ ({ theme }) => theme.colors.grey.medium };
		    cursor: not-allowed;
		  }

		  &.invalid {
		    background: ${ ({ theme }) => theme.colors.white };
		    border: 1.5px solid ${ ({ theme }) => theme.colors.system.error };
		    color: ${ ({ theme }) => theme.colors.system.error };
		  }

		  &::placeholder {
		    color: ${ ({ theme }) => theme.colors.typography.light };
		  }
	  }
  }
`
