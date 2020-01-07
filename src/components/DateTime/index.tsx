import moment from 'moment'
import { DatetimePickerTrigger } from 'rc-datetime-picker'
import 'rc-datetime-picker/dist/picker.min.css'
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
        <input className="input" value={ value.format('DD/MM/YYYY hh:mm:ss') } readOnly />
      </DatetimePickerTrigger>
    </Styled>
  )
}

export default DateTime
