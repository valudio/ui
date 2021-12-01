import React, { useContext } from 'react'
import { default as DatePicker } from '../../DateTime'
import classNames from 'classnames'
import { DateTime } from 'luxon'
import { getDateLong } from '../../../helpers'
import { CalendarViewMode } from '../../../models'
import StyledSection from './styles'
import LanguageContext from 'components/Provider/LanguageContext'
import literals from 'literals'

interface IProps {
  selectedDate: string
  viewMode: CalendarViewMode
  onViewModeChange: (viewMode: CalendarViewMode) => void
  onDateChange: (newDate: string) => void
}

const HeaderFilter: React.FC<IProps> = ({ selectedDate, viewMode, onViewModeChange, onDateChange }) => {
  const language = useContext(LanguageContext)

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
            { getDateLong(selectedDate, language) }
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
          { literals[language].oneDay }
        </div>
        <div
          className={ classNames('tab', { active: viewMode === CalendarViewMode.Week }) }
          onClick={ () => onViewModeChange(CalendarViewMode.Week) }
        >
          { literals[language].oneWeek }
        </div>
        <div
          className={ classNames('tab', { active: viewMode === CalendarViewMode.Month }) }
          onClick={ () => onViewModeChange(CalendarViewMode.Month) }
        >
          { literals[language].oneMonth }
        </div>
      </nav>
    </StyledSection>
  )
}

export default HeaderFilter
