import React, { ReactNode } from 'react'
import { DateTime } from 'luxon'
import { IEvent, IEventDate, IMonth } from '../models'
// import { HourCell } from '../components/Calendar/HourCell'

export const weekdays = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ]
export const weekdaysLong = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
export const weekdaysLongGerman = [ 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag' ]

export const getDaysInMonth = (month: number, year: number): number => {
  return DateTime.local(year, month).daysInMonth
}

export const getFirstWeekdayOfMonth = (month: number, year: number): number => {
  return DateTime.local(year, month, 1).weekday
}

export const getDatesInMonthDisplay = (month: number, year: number): string[] => {
  const daysInMonth = getDaysInMonth(month, year)
  const firstWeekday = getFirstWeekdayOfMonth(month, year)
  const prev = getPrevMonthYear(month, year)
  const prevDaysInMonth = getDaysInMonth(prev.month, prev.year)
  const monthDates = []

  for (let i = firstWeekday - 1; i >= 1 ; i--) {
    monthDates.push(DateTime.utc(prev.year, prev.month, (prevDaysInMonth + 1) - i).toISO())
  }

  for (let i = 1; i <= daysInMonth; i++) {
    monthDates.push(DateTime.utc(year, month, i).toISO())
  }

  if (monthDates.length < 42) {
    const daysToAdd = 42 - monthDates.length
    const next = getNextMonthYear(month, year)

    for (let i = 1; i <= daysToAdd; i++) {
      monthDates.push(DateTime.utc(next.year, next.month, i).toISO())
    }
  }

  return monthDates
}

export const getPrevMonthYear = (month: number, year: number): IMonth => {
  if (month === 1) return { month: 12, year: year - 1 }
  return { month: month - 1, year }
}

export const getNextMonthYear = (month: number, year: number): IMonth => {
  if (month === 1) return { month: month + 1, year }
  if (month === 12) return { month: 1, year: year + 1 }
  return { month: month + 1, year }
}

export const getSpecificDate = (day: number, month: number, year: number): string => {
  return DateTime.utc(year, month, day).toISO()
}

export const getDayOfMonth = (date: string, locale: string): number => {
  return DateTime.fromISO(date, { locale }).day
}

export const getMonth = (date: string, locale: string): number => {
  return DateTime.fromISO(date, { locale }).month
}

export const getYear = (date: string, locale: string): number => {
  return DateTime.fromISO(date, { locale }).year
}

export const getReadableWeekday = (date: string, locale: string): string => {
  return DateTime.fromISO(date, { locale }).weekdayLong
}

export const getReadableMonth = (date: string, locale: string): string => {
 return DateTime.fromISO(date, { locale }).monthLong
}

export const getDate = (date: string, locale: string): string => {
  return DateTime.fromISO(date, { locale }).toLocaleString(DateTime.DATE_SHORT)
}

export const getDateLong = (date: string, locale: string): string => {
  return DateTime.fromISO(date, { locale }).toLocaleString(DateTime.DATE_HUGE)
}

export const getISODate = (date: string, locale: string): string => {
  return DateTime.fromISO(date, { locale }).toISODate()
}

export const isDateCurrentDay = (selectedDate: string, comparingDate: string, locale: string): boolean => {
  const selectedDateString = getSpecificDate(
    getDayOfMonth(selectedDate, locale),
    getMonth(selectedDate, locale),
    getYear(selectedDate, locale)
  )
  const comparingDateString = getSpecificDate(
    getDayOfMonth(comparingDate, locale),
    getMonth(comparingDate, locale),
    getYear(comparingDate, locale)
  )

  return selectedDateString === comparingDateString
}

export const isDateCurrentMonth = (selectedDate: string, comparingDate: string, locale: string): boolean => {
  return getMonth(selectedDate, locale) === getMonth(comparingDate, locale)
}

export const getCurrentWeekDayNumbers = (date: string, locale: string): number[] => {
  const weekNumber = DateTime.fromISO(date, { locale }).weekday
  const month = getMonth(date, locale)
  const year = getYear(date, locale)
  const displayMonthDays = getDatesInMonthDisplay(month, year)
  const dateIndex = displayMonthDays.findIndex(monthDate => isDateCurrentDay(date, monthDate, locale))
  const weekDaysNumbers = []

  for (let i = dateIndex - (weekNumber - 1); i <= dateIndex; i++) {
    weekDaysNumbers.push(getDayOfMonth(displayMonthDays[i], locale))
  }

  for (let j = dateIndex + 1; weekDaysNumbers.length !== 7; j++) {
    weekDaysNumbers.push(getDayOfMonth(displayMonthDays[j], locale))
  }

  return weekDaysNumbers
}

export const getCurrentWeekDays = (date: string, locale: string): string[] => {
  const weekNumber = DateTime.fromISO(date, { locale }).weekday
  const month = getMonth(date, locale)
  const year = getYear(date, locale)
  const displayMonthDays = getDatesInMonthDisplay(month, year)
  const dateIndex = displayMonthDays.findIndex(monthDate => isDateCurrentDay(date, monthDate, locale))
  const weekDays = []

  for (let i = dateIndex - (weekNumber - 1); i <= dateIndex; i++) {
    weekDays.push(getISODate(displayMonthDays[i], locale))
  }

  for (let j = dateIndex + 1; weekDays.length !== 7; j++) {
    weekDays.push(getISODate(displayMonthDays[j], locale))
  }

  return weekDays
}

export const getWeekDayNumber = (date: string, locale: string): number => {
  return DateTime.fromISO(date, { locale }).weekday
}

export const renderHourAxis = (from: number, to: number): ReactNode => {
  const hourDividersCount = to - from
  const axisLabels: ReactNode[] = []
  const axisIndicators: ReactNode[] = []

  for (let i = 0; i <= hourDividersCount; i++) {
    axisLabels.push((
      <div key={ `hour - ${ i + 1 }` } className="hour">
        <span>{ from + i }</span>
      </div>
    ))
  }

  for (let j = 0; j <= hourDividersCount; j++) {
    axisIndicators.push(<span key={ `hour - ${ j + 1 }` } className="space" /> )
  }

  return (
    <>
      <div className="hours">
        { axisLabels }
      </div>
      <div className="spaces">
        { axisIndicators }
      </div>
    </>
  )
}

export const renderWeekDaysColumns = (
  columnsQty: number,
  fromHour: number,
  toHour: number,
  events: IEvent<any>[],
  locale: string,
  openCallback: (event: IEvent<any>) => void,
  createCallback: (date: IEventDate, weekdayIndex?: number) => void
): ReactNode[] => {
  const columns = []

  for (let i = 0; i < columnsQty; i++) {
    const dayEvents: IEvent<any>[] = columnsQty > 1
      ? events.filter(event => {
        const weekDay = locale === 'en-GB' ? weekdaysLong[i] : weekdaysLongGerman[i]
        const eventWeekday = getReadableWeekday(event.date.day, locale)
        return weekDay === eventWeekday.toLowerCase()
      })
      : events

    columns.push((
      <section key={ weekdays[i] } className="day">
        {
          renderDayHoursDividers(
            weekdays[i],
            fromHour,
            toHour,
            dayEvents,
            openCallback,
            date => createCallback(date, i)
          )
        }
      </section>
    ))
  }

  return columns
}

// TODO: Finish hour selection on creating event
export const renderDayHoursDividers = (
  day: string,
  fromHour: number,
  toHour: number,
  events: IEvent<any>[],
  openCallback: (event: IEvent<any>) => void,
  createCallback: (date: IEventDate) => void
): ReactNode[]  => {
  const dayCellsCount = ((toHour - fromHour) * 4) + 2
  const sections = []
  let hour = fromHour - 1
  let minutes = 30

  for (let i = 0; i < dayCellsCount; i++) {
    const cellHour = hour >= 10 ? hour : `0${ hour }`
    const cellMinutes = minutes < 15 ? '00' : minutes
    const hourEvents = events.filter(event => {
      const [hour, minute] = event.date.fromHour.split(':')
      const isSameHour = Number(hour) === Number(cellHour)
      const differenceInMinutes = Number(minute) - Number(cellMinutes)
      const differenceInMinutesIsLow = 10 > differenceInMinutes && differenceInMinutes >= 0
      return isSameHour && differenceInMinutesIsLow
    })
    const eventDate: IEventDate = {
      day: day,
      fromHour: `${ cellHour }:${ cellMinutes }`,
      toHour: ''
    }

    // sections.push(
    //   <HourCell
    //     key={ `${ day }-${ cellHour }:${ cellMinutes }` }
    //     id={ `${ cellHour }:${ cellMinutes }` }
    //     events={ hourEvents }
    //     onCreate={ () => createCallback(eventDate) }
    //     onOpenEvent={ event => openCallback(event) }
    //   />
    // )

    if (minutes < 45) {
      minutes = minutes + 15
    } else {
      hour = hour + 1
      minutes = 0
    }
  }

  return sections
}

export const durationInMinutes = (eventDate: IEventDate): any => {
  const fromTime = eventDate.fromHour.split(':')
  const toTime = eventDate.toHour.split(':')
  const startDate = DateTime.fromISO(eventDate.day).set({
    hour: Number(fromTime[0]),
    minute: Number(fromTime[1])
  })
  const endDate = DateTime.fromISO(eventDate.day).set({
    hour: Number(toTime[0]),
    minute: Number(toTime[1])
  })
  return endDate.diff(startDate, 'minutes').as('minutes')
}

export const durationInDays = (from: string, to: string): any => {
  const startDate = DateTime.fromISO(from)
  const endDate = DateTime.fromISO(to)
  return endDate.diff(startDate, 'days').as('days')
}

export const hourWithAddedMinutes = (from: string, duration: string): string => {
  const newHour = DateTime.fromSQL(from).plus({ minutes: Number(duration) }).toFormat('HH:mm')
  return isDiffLessThanQuarter(from, newHour) ? addQuarterToHour(from) : newHour
}

export const isDiffLessThanQuarter = (from: string, to: string) => {
  const fromDate = DateTime.fromSQL(from)
  const toDate = DateTime.fromSQL(to)
  const diff = toDate.diff(fromDate, ['minutes'])
  return diff.minutes < 15
}

export const addQuarterToHour = (time: string) => {
  return DateTime.fromSQL(time).plus({ minutes: 15 }).toFormat('HH:mm')
}
