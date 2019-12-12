import React, { useState } from 'react'
import Styled from './styles'

interface IProps {
  onChange?: (value: boolean) => void
  isChecked?: boolean
  isDisabled?: boolean
  isHidden?: boolean
}

const Checkbox: React.FC<IProps> = props => {
  const { onChange, isHidden, isChecked = false, isDisabled } = props
  const [ checked, setChecked ] = useState(isChecked)
  const classNames = `checkbox ${ checked ? 'checked' : '' } ${ isDisabled ? 'disabled' : '' }`
  if (isHidden) return null

  const handleClick = () => {
    setChecked(!checked)
    if (onChange) onChange(!checked)
  }

  return (
    <Styled className={ classNames } onClick={ handleClick }>
      <i className="icon">✕</i>
      <span className="check"/>
    </Styled>
  )
}

export default Checkbox
