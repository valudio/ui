import React, { ChangeEvent } from 'react'
import Styled from './styles'

interface IProps {
  label: string
  className?: string
  isHidden?: boolean
  placeholder?: string
  onChange?: (value: string) => void
  isDisabled?: boolean
  isInvalid?: boolean
}

const Input: React.FC<IProps> = props => {
  const { onChange, className, isHidden, label, placeholder, isDisabled, isInvalid } = props
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value)

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isDisabled ? 'disabled' : '' } ${ isInvalid ? 'invalid' : '' }`

  return (
    <Styled className={ classNames }>
      <label className="label">{ label }</label>
      <input className="input" placeholder={ placeholder } onChange={ handleChange } disabled={ isDisabled } />
    </Styled>
  )
}

export default Input
