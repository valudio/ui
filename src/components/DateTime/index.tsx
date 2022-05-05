import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { IInputProps } from '../../models'
import Styled from './styles'

interface IProps extends IInputProps<Date> {
  minDate?: Date
  maxDate?: Date
  showTime?: boolean
}

const DateTime: React.FC<IProps> = ({
  isHidden, className, style, initialValue, onChange, minDate, maxDate, placeholder, form, isDisabled, showTime = true
}) => {
  const [ value, setValue ] = useState(initialValue ?? undefined)
  // const language = useContext(LanguageContext)

  // const weekDays = [
  //   literals[language].sun,
  //   literals[language].mon,
  //   literals[language].tue,
  //   literals[language].wed,
  //   literals[language].thu,
  //   literals[language].fri,
  //   literals[language].sat
  // ]
  // const months = [
  //   literals[language].january,
  //   literals[language].february,
  //   literals[language].march,
  //   literals[language].april,
  //   literals[language].may,
  //   literals[language].june,
  //   literals[language].july,
  //   literals[language].august,
  //   literals[language].september,
  //   literals[language].october,
  //   literals[language].november,
  //   literals[language].december,
  // ]

  const handleChange = (nextValue: Date) => {
    setValue(nextValue)
    onChange(nextValue)
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', () => setValue.bind(undefined))
  }, [ form ])

  if (isHidden) return null
  return (
    <Styled className={ className || '' } style={ style }>
      <DatePicker
        selected={ value }
        onChange={ handleChange }
        minDate={ minDate }
        maxDate={ maxDate }
        showTimeSelect={ showTime }
        timeFormat="HH:mm"
        timeIntervals={ 15 }
        placeHolderText={ placeholder }
      />
    </Styled>
  )
}

export default DateTime
