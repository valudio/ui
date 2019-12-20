import React, { useState } from 'react'
import { IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  onChange?: (value: boolean) => void
  defaultValue?: boolean
  isDisabled?: boolean
}

const Checkbox: React.FC<IProps> = ({ onChange, isHidden, defaultValue, isDisabled, style }) => {
  const [ isChecked, setIsChecked ] = useState(!!defaultValue)
  const classNames = `checkbox ${ isChecked ? 'checked' : '' } ${ isDisabled ? 'disabled' : '' }`
  if (isHidden) return null

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
