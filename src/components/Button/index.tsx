import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  onClick?: () => void
  isDisabled?: boolean
  isSecondary?: boolean
}

const Button: React.FC<IProps> = props => {
  const { children, className, isHidden, onClick, isDisabled, isSecondary, style } = props
  const handleClick = () => onClick && onClick()

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isSecondary ? 'secondary' : '' }`

  return (
    <Styled
      className={ classNames }
      onClick={ handleClick }
      disabled={ isDisabled }
      style={ style }
    >{ children }</Styled>
  )
}

export default Button
