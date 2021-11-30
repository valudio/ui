import React, { createContext, useState } from 'react'
import { CalendarViewMode } from '../models'

export interface ICalendarContext {
  calendarView: CalendarViewMode
  setCalendarView: (viewMode: CalendarViewMode) => void
}

const CalendarContext = createContext<ICalendarContext>({
  calendarView: CalendarViewMode.Day,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCalendarView: (viewMode: CalendarViewMode) => undefined
})

const CalendarProvider: React.FC = ({ children }) => {
  const [ calendarView, setCalendarView ] = useState<CalendarViewMode>(CalendarViewMode.Week)

  const handleViewModeChange = (newViewMode: CalendarViewMode) => {
    setCalendarView(newViewMode)
  }

  return (
    <CalendarContext.Provider
      value={{
        calendarView,
        setCalendarView: handleViewModeChange
      }}
    >
      { children }
    </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }
