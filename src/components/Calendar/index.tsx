import React, { useContext } from 'react'
import { IEvent, IEventDate } from '../../models'
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

const Calendar: React.FC<IProps> = () => {
  const { calendarView, setCalendarView } = useContext(CalendarContext)

  return (
    <StyledArticle className="calendar">

    </StyledArticle>
  )
}

export default Calendar
