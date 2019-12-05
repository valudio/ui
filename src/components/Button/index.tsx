import React from 'react'
import Styled from './styles'

interface IProps {
  onClick?: () => void
  className?: string
  isDisabled?: boolean
  isSecondary?: boolean
  isHidden?: boolean
}

const Button: React.FC<IProps> = props => {
  const { children, className, isHidden, onClick, isDisabled, isSecondary } = props
  const handleClick = () => onClick && onClick()

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isSecondary ? 'secondary' : '' }`

  return <Styled className={ classNames } onClick={ handleClick } disabled={ isDisabled }>{ children }</Styled>
}

export default Button
