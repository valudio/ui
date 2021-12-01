import React, { useContext } from 'react'
import LanguageContext from '../../Provider/LanguageContext'
import { DateTime } from 'luxon'
import { renderHourAxis, renderWeekDaysColumns } from '../../../helpers'
import { IEvent, IEventDate } from '../../../models'
import StyledSection from './styles'

interface IProps {
  selectedDate: string
  fromHour: number
  toHour: number
  events: IEvent<any>[]
  isHidden?: boolean
  onCreateEvent: (date: IEventDate) => void
  onOpenEvent?: (event: IEvent<any>) => void
}

const DayView: React.FC<IProps> = ({
  selectedDate, fromHour, toHour, events, isHidden, onCreateEvent, onOpenEvent
}) => {
  const language = useContext(LanguageContext)
  const handleOpenEvent = (event: IEvent<any>) => {
    if (onOpenEvent && typeof onOpenEvent === 'function') onOpenEvent(event)
  }

  const handleCreateEvent = (eventDate: IEventDate) => {
    const createDate: IEventDate = {
      ...eventDate,
      day: DateTime.fromISO(selectedDate).set({ hour: 0, minute: 0, second: 0 }).toISODate()
    }
    onCreateEvent(createDate)
  }

  if (isHidden) return null
  return (
    <StyledSection>
      <section className="hour-indicators">
        { renderHourAxis(fromHour, toHour) }
      </section>
      <section className="weekdays">
        { renderWeekDaysColumns(1, fromHour, toHour, events, language, handleOpenEvent, handleCreateEvent) }
      </section>
    </StyledSection>
  )
}

export default DayView
