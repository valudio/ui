import React, { useContext } from 'react'
import classNames from 'classnames'
import { CalendarViewMode } from '../../../models'
import { getDayOfMonth, getWeekDayNumber, weekdays, weekdaysLong } from '../../../helpers'
import LanguageContext from '../../Provider/LanguageContext'
import StyledSection from './styles'
import literals from 'literals'

interface IProps {
  selectedDate: string
  weekNumbers: number[]
  viewMode: CalendarViewMode
}

const WeekHeader: React.FC<IProps> = ({ selectedDate, weekNumbers, viewMode }) => {
  const language = useContext(LanguageContext)

  const weekdaysItems = viewMode !== CalendarViewMode.Day
    ? weekdays.map((day, i) => {
        return (
          <div
            key={ `${ day }-${ weekNumbers[i] }` }
            className={
              classNames('weekday', {
                active: weekNumbers[i] === getDayOfMonth(selectedDate, language)
              })
            }
          >
            <h4>{ literals[language][day] }</h4>
            { viewMode === CalendarViewMode.Week ? <p>{ weekNumbers[i] }</p> : null }
          </div>
        )
      })
    : (
        <div className="weekday active">
          <h4>
            {
              literals[language][weekdaysLong[getWeekDayNumber(selectedDate, language) - 1]]
            }
          </h4>
          <p>{ getDayOfMonth(selectedDate, language) }</p>
        </div>
      )

  const hourDivider = viewMode !== CalendarViewMode.Month
    ? (
      <section className="hour-divider">
        <div className="our"></div>
        <div className="space"></div>
      </section>
    ) : null

  return (
    <StyledSection
      className={
        classNames({
          week: viewMode === CalendarViewMode.Week,
          day: viewMode === CalendarViewMode.Day
        })
      }
    >
      { hourDivider }
      <section className="weekdays">
        { weekdaysItems }
      </section>
    </StyledSection>
  )
}

export default WeekHeader
