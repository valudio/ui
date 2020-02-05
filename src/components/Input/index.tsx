import React, { ChangeEvent, useState } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  initialValue?: string
  type?: string
  placeholder?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
}

// tslint:disable-next-line: max-line-length
const Input: React.FC<IProps> = ({ initialValue, onChange, className, type = 'text', isHidden, placeholder, isDisabled, isInvalid, style }) => {
  const [ value, setValue ] = useState(initialValue ?? '')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.currentTarget.value
    setValue(nextValue)
    if (onChange) onChange(nextValue)
  }

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
