import React, { useState, useEffect } from 'react'
import { IInputProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IInputProps<boolean> {
  value?: boolean
}

const Checkbox: React.FC<IProps> = ({ onChange, isHidden, value, isDisabled, style, form }) => {
  const [ isChecked, setIsChecked ] = useState(value)
  const classNames = `checkbox ${ isChecked ? 'checked' : '' } ${ isDisabled ? 'disabled' : '' }`

  useEffect(() => {
    if (form) form.addEventListener('reset', setIsChecked.bind(undefined, value))
  }, [ form ])

  if (isHidden) return null
  if (value !== isChecked) setIsChecked(value)

  const handleChange = () => {
    if (isDisabled || !onChange) return
    const nextIsChecked = !isChecked
    setIsChecked(nextIsChecked)
    onChange(nextIsChecked)
  }

  return (
    <Styled className={ classNames } onClick={ handleChange } style={ style }>
      <Icon className="icon" icon="check"/>
    </Styled>
  )
}

export default Checkbox
