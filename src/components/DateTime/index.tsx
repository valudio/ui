import { DatetimePickerTrigger } from 'imrc-datetime-picker'
import 'imrc-datetime-picker/dist/imrc-datetime-picker.min.css'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import literals from '../../literals'
import { IInputProps } from '../../models'
import LanguageContext from '../Provider/LanguageContext'
import Styled from './styles'

interface IProps extends IInputProps<string> {
  locale: string
  minDate?: string
  maxDate?: string
}

// tslint:disable-next-line: max-line-length
const DateTime: React.FC<IProps> = ({ isHidden, className, style, initialValue, onChange, minDate, maxDate, locale, placeholder, form, isDisabled }) => {
  if (isHidden) return null

  const [ value, setValue ] = useState(initialValue ? moment(initialValue) : undefined)
  const language = useContext(LanguageContext)
  const [lang, setLang] = useState(!!locale ? locale : language)
  const momentValue = !!value ? value : moment()
  const min = minDate && moment(minDate)
  const max = maxDate && moment(maxDate)

  const handleChange = (nextValue: moment.Moment) => {
    setValue(nextValue)
    onChange(nextValue.toISOString())
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setValue.bind(undefined, initialValue ? moment(initialValue) : undefined))
    setLang(locale)
  }, [ form, locale ])

  return (
    <Styled className={ className || '' } style={ style }>
      <DatetimePickerTrigger
        moment={ momentValue }
        onChange={ handleChange }
        minDate={ min }
        maxDate={ max }
        lang={ lang }
      >
        <input
          className="input"
          placeholder={ placeholder }
          value={ !!value ? value.format('DD/MM/YYYY HH:mm:ss') : '' }
          disabled={ isDisabled }
          readOnly
        />
      </DatetimePickerTrigger>
    </Styled>
  )
}

export default DateTime
