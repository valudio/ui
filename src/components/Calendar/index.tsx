import React, { useContext } from 'react'
import { CalendarContext } from '../../contexts'
import { CalendarViewMode, IEvent, IEventDate } from '../../models'
import { getCurrentWeekDayNumbers, getCurrentWeekDays } from '../../helpers'
import LanguageContext from '../Provider/LanguageContext'
import Spinner from '../Spinner'
import HeaderFilter from './HeaderFilter'
import WeekHeader from './WeekHeader'
import DayView from './DayView'
import StyledArticle from './styles'

interface IProps {
  selectedDate: string
  events: IEvent<any>[]
  fromHour: number
  toHour: number
  onSelectedDateChange: (date: string) => void
  onOpenEvent: (event: IEvent<any>) => void
  onCreateEvent?: (createDate: IEventDate) => void
  isLoading?: boolean
}

const Calendar: React.FC<IProps> = ({
  selectedDate, events, fromHour, toHour, onSelectedDateChange, onOpenEvent, onCreateEvent, isLoading
}) => {
  const language = useContext(LanguageContext)
  const { calendarView, setCalendarView } = useContext(CalendarContext)

  const handleViewModeChange = (viewMode: CalendarViewMode) => setCalendarView(viewMode)
  const handleOpenCreateModal = (date: IEventDate) => {
    if (onCreateEvent && typeof onCreateEvent === 'function') onCreateEvent(date)
  }


  return (
    <StyledArticle className="calendar">
      <HeaderFilter
        selectedDate={ selectedDate }
        viewMode={ calendarView }
        onViewModeChange={ handleViewModeChange }
        onDateChange={ onSelectedDateChange }
      />
      {
        isLoading
          ? (
            <section className="loading-container">
              <Spinner />
            </section>
          ) : (
            <section className="calendar-view">
              <WeekHeader
                selectedDate={ selectedDate }
                weekNumbers={ getCurrentWeekDayNumbers(selectedDate, language) }
                viewMode={ calendarView }
              />
              <DayView
                selectedDate={ selectedDate }
                fromHour={ fromHour }
                toHour={ toHour }
                events={ events }
                isHidden={ calendarView !== CalendarViewMode.Day }
                onCreateEvent={ handleOpenCreateModal }
                onOpenEvent={ onOpenEvent }
              />
              <WeekView
                weekDates={ getCurrentWeekDays(selectedDate, language) }
                fromHour={ fromHour }
                toHour={ toHour }
                events={ events }
                isHidden={ calendarView !== CalendarViewMode.Week }
                onCreateEvent={ handleOpenCreateModal }
                onOpenEvent={ onOpenEvent }
              />
              <MonthView
                selectedDate={ selectedDate }
                events={ events }
                isHidden={ calendarView !== CalendarViewMode.Month }
                onCreateEvent={ handleOpenCreateModal }
                onOpenEvent={ onOpenEvent }
              />
            </section>
          )
      }
    </StyledArticle>
  )
}

export default Calendar
