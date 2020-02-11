import React, { ChangeEvent, useEffect, useState } from 'react'
import { IInputProps } from '../../models'
import Styled from './styles'

interface IProps extends IInputProps<string> {
  type?: string
}

// tslint:disable-next-line: max-line-length
const Input: React.FC<IProps> = ({ initialValue, onChange, className, type = 'text', isHidden, placeholder, isDisabled, isInvalid, style, form }) => {
  const [ value, setValue ] = useState(initialValue ?? '')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.currentTarget.value
    setValue(nextValue)
    if (onChange) onChange(nextValue)
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setValue.bind(undefined, initialValue ?? ''))
  }, [ form ])

  if (isHidden) return null

  const classNames = `${ className || '' } ${ isInvalid ? 'invalid' : '' }`

  return (
    <Styled
      className={ classNames }
      type={ type }
      placeholder={ placeholder }
      onChange={ handleChange }
      disabled={ isDisabled }
      style={ style }
      value={ value }
    />
  )
}

export default Input
