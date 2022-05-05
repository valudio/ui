import React, { useState } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  onChange?: (value: boolean) => void
  initialValue?: boolean
  isDisabled?: boolean
}

const Toggle: React.FC<IProps> = ({ isHidden, style, className, initialValue, onChange, isDisabled }) => {
  const [ isOn, setIsOn ] = useState(!!initialValue)
  const classNames = `${ className || '' } ${ isOn ? 'on' : '' } ${ isDisabled ? 'disabled' : '' }`

  const handleChange = () => {
    if (isDisabled || !onChange) return
    const nextIsOn = !isOn
    setIsOn(nextIsOn)
    onChange(nextIsOn)
  }

  if (isHidden) return null
  return <Styled style={ style } className={ classNames } onClick={ handleChange } />
}

export default Toggle
