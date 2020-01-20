import React, { ChangeEvent } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type?: string
  placeholder?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
}

const Input: React.FC<IProps> = props => {
  const { onChange, className, type = 'text', isHidden, placeholder, isDisabled, isInvalid, style } = props
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value)

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
    />
  )
}

export default Input
