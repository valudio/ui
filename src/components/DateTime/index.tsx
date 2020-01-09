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
  placeholder?: string
}

// tslint:disable-next-line: max-line-length
const DateTime: React.FC<IProps> = ({ isHidden, className, style, initialValue, onChange, minDate, maxDate, placeholder }) => {
  if (isHidden) return null
  const [ value, setValue ] = useState(initialValue ? moment(initialValue) : undefined)
  const momentValue = !!value ? value : moment()
  const min = minDate && moment(minDate)
  const max = maxDate && moment(maxDate)

  const handleChange = (nextValue: moment.Moment) => {
    setValue(nextValue)
    onChange(nextValue.toISOString())
  }

  return (
    <Styled className={ className || '' } style={ style }>
      <DatetimePickerTrigger moment={ momentValue } onChange={ handleChange } minDate={ min } maxDate={ max }>
        <input
          className="input"
          placeholder={ placeholder }
          value={ !!value ? value.format('DD/MM/YYYY HH:mm:ss') : '' }
          readOnly
        />
      </DatetimePickerTrigger>
    </Styled>
  )
}

export default DateTime
