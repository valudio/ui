import { DatetimePickerTrigger } from 'imrc-datetime-picker'
import 'imrc-datetime-picker/dist/imrc-datetime-picker.min.css'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import literals from '../../literals'
import { IInputProps } from '../../models'
import LanguageContext from '../Provider/LanguageContext'
import Styled from './styles'

interface IProps extends IInputProps<string> {
  minDate?: string
  maxDate?: string
  showTime?: boolean
}

// tslint:disable-next-line: max-line-length
const DateTime: React.FC<IProps> = ({ isHidden, className, style, initialValue, onChange, minDate, maxDate, placeholder, form, isDisabled, showTime = true }) => {
  if (isHidden) return null

  const [ value, setValue ] = useState(initialValue ? moment(initialValue) : undefined)
  const language = useContext(LanguageContext)
  const momentValue = !!value ? value : moment()
  const min = minDate && moment(minDate)
  const max = maxDate && moment(maxDate)
  const weekDays = [
    literals[language].sun,
    literals[language].mon,
    literals[language].tue,
    literals[language].wed,
    literals[language].thu,
    literals[language].fri,
    literals[language].sat
  ]
  const months = [
    literals[language].january,
    literals[language].february,
    literals[language].march,
    literals[language].april,
    literals[language].may,
    literals[language].june,
    literals[language].july,
    literals[language].august,
    literals[language].september,
    literals[language].october,
    literals[language].november,
    literals[language].december,
  ]

  const formattedValue = () => {
    if (!!value) {
      return showTime ? value.format('DD/MM/YYYY HH:mm:ss') : value.format('DD/MM/YYYY')
    } else {
      return ''
    }
  }

  const handleChange = (nextValue: moment.Moment) => {
    setValue(nextValue)
    onChange(nextValue.toISOString())
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setValue.bind(undefined, undefined))
  }, [ form ])

  return (
    <Styled className={ className || '' } style={ style }>
      <DatetimePickerTrigger
        moment={ momentValue }
        onChange={ handleChange }
        minDate={ min }
        maxDate={ max }
        weeks={ weekDays }
        months={ months }
        lang={ language }
        showTimePicker={ showTime }
        showSecondsPicker={ showTime }
      >
        <input
          className="input"
          placeholder={ placeholder }
          value={ formattedValue() }
          disabled={ isDisabled }
          readOnly
        />
      </DatetimePickerTrigger>
    </Styled>
  )
}

export default DateTime
