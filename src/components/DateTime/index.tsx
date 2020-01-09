import { DatetimePickerTrigger } from 'imrc-datetime-picker'
import 'imrc-datetime-picker/dist/imrc-datetime-picker.min.css'
import moment from 'moment'
import React, { useState } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  onChange: (value: string) => void
  initialValue?: string
  minDate?: string
  maxDate?: string
}

const DateTime: React.FC<IProps> = ({ isHidden, className, style, initialValue, onChange, minDate, maxDate }) => {
  if (isHidden) return null
  const [ value, setValue ] = useState(moment(initialValue))
  const min = minDate && moment(minDate)
  const max = maxDate && moment(maxDate)

  const handleChange = (nextValue: moment.Moment) => {
    setValue(nextValue)
    onChange(nextValue.toISOString())
  }

  return (
    <Styled className={ className || '' } style={ style }>
      <DatetimePickerTrigger moment={ value } onChange={ handleChange } minDate={ min } maxDate={ max }>
        <input className="input" value={ value.format('DD/MM/YYYY HH:mm:ss') } readOnly />
      </DatetimePickerTrigger>
    </Styled>
  )
}

export default DateTime
