import React, { useEffect, useState } from 'react'
import { IInputProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IInputProps<boolean> {
  value?: boolean
}

const Checkbox: React.FC<IProps> = ({ onChange, isHidden, value, isDisabled, style, form }) => {
  const [ isChecked, setIsChecked ] = useState(value)
  const classNames = `checkbox ${ isChecked ? 'checked' : '' } ${ isDisabled ? 'disabled' : '' }`

  const handleChange = () => {
    if (isDisabled || !onChange) return
    const nextIsChecked = !isChecked
    setIsChecked(nextIsChecked)
    onChange(nextIsChecked)
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setIsChecked.bind(undefined, value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ form ])

  useEffect(() => {
    if (value !== isChecked) setIsChecked(value)
  }, [ value ])

  if (isHidden) return null
  return (
    <Styled className={ classNames } onClick={ handleChange } style={ style }>
      <Icon className="icon" icon="check" onClick={ handleChange }/>
    </Styled>
  )
}

export default Checkbox
