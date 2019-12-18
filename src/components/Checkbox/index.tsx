import React, { useState } from 'react'
import { IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  onChange?: (value: boolean) => void
  isChecked?: boolean
  isDisabled?: boolean
}

const Checkbox: React.FC<IProps> = props => {
  const { onChange, isHidden, isChecked = false, isDisabled, style } = props
  const [ checked, setChecked ] = useState(isChecked)
  const classNames = `checkbox ${ checked ? 'checked' : '' } ${ isDisabled ? 'disabled' : '' }`
  if (isHidden) return null

  if (isChecked !== checked) setChecked(isChecked)

  const handleClick = () => {
    setChecked(!checked)
    if (onChange) onChange(!checked)
  }

  return (
    <Styled className={ classNames } onClick={ handleClick } style={ style }>
      <Icon className="icon" icon="check"/>
    </Styled>
  )
}

export default Checkbox
