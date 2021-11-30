import React, { useContext } from 'react'
import { CalendarContext } from '../../contexts'
import { CalendarViewMode, IEvent, IEventDate } from '../../models'
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
  const { calendarView, setCalendarView } = useContext(CalendarContext)

  const handleViewModeChange = (viewMode: CalendarViewMode) => setCalendarView(viewMode)
  const handleOpenCreateModal = (date: IEventDate) => {
    if (onCreateEvent && typeof onCreateEvent === 'function') onCreateEvent(date)
  }


  return (
    <StyledArticle className="calendar">

    </StyledArticle>
  )
}

export default Calendar
