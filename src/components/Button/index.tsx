import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  onClick?: () => void
  isDisabled?: boolean
  isSecondary?: boolean
  isCircular?: boolean
}

// tslint:disable-next-line: max-line-length
const Button: React.FC<IProps> = ({ children, className, isHidden, onClick, isDisabled, isSecondary, style, isCircular }) => {
  const handleClick = () => onClick && onClick()

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isSecondary ? 'secondary' : '' } ${ isCircular ? 'circular' : '' }`

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
