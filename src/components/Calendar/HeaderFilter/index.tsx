import { DateTime as DatePicker } from '../../../components'
import classNames from 'classnames'
import { DateTime } from 'luxon'
import React from 'react'
import { useIntl } from 'react-intl'
import { getDateLong } from '../../../helpers'
import { CalendarViewMode } from '../../../models'
import StyledSection from './styles'

interface IProps {
  selectedDate: string
  viewMode: CalendarViewMode
  onViewModeChange: (viewMode: CalendarViewMode) => void
  onDateChange: (newDate: string) => void
}

export const HeaderFilter: React.FC<IProps> = ({ selectedDate, viewMode, onViewModeChange, onDateChange }) => {
  const { locale, formatMessage } = useIntl()

  const handleDateChange = (value: string) => {
    onDateChange(value)
  }

  const handleYesterdayClick = () => {
    const yesterday = DateTime.fromISO(selectedDate).plus({ days: -1 }).toISO()
    handleDateChange(yesterday)
  }

  const handleTomorrowClick = () => {
    const tomorrow = DateTime.fromISO(selectedDate).plus({ days: 1 }).toISO()
    handleDateChange(tomorrow)
  }


  return (
    <StyledSection>
      <div className="date-filter">
        <button onClick={ handleYesterdayClick }>
          <img src="/assets/images/left.svg" alt="Yesterday"/>
        </button>
        <div className="date-select">
          <DatePicker
            className="date-input"
            initialValue={ selectedDate }
            onChange={ handleDateChange }
            showTime={ false }
          />

          <span className="date">
            { getDateLong(selectedDate, locale) }
          </span>
        </div>
        <button onClick={ handleTomorrowClick }>
          <img src="/assets/images/right.svg" alt="Tomorrow"/>
        </button>
      </div>
      <nav className="tabs">
        <div
          className={ classNames('tab', { active: viewMode === CalendarViewMode.Day }) }
          onClick={ () => onViewModeChange(CalendarViewMode.Day) }
        >
          { formatMessage({ id: 'oneDay' }) }
        </div>
        <div
          className={ classNames('tab', { active: viewMode === CalendarViewMode.Week }) }
          onClick={ () => onViewModeChange(CalendarViewMode.Week) }
        >
          { formatMessage({ id: 'oneWeek' }) }
        </div>
        <div
          className={ classNames('tab', { active: viewMode === CalendarViewMode.Month }) }
          onClick={ () => onViewModeChange(CalendarViewMode.Month) }
        >
          { formatMessage({ id: 'oneMonth' }) }
        </div>
      </nav>
    </StyledSection>
  )
}
