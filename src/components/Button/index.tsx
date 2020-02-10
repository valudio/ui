import React from 'react'
import { IBaseProps } from '../../models'
import { Primary, Secondary, Tertiary } from './styles'

interface IProps extends IBaseProps {
  onClick?: () => void
  isDisabled?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
  isCircular?: boolean
}

// tslint:disable-next-line: max-line-length
const Button: React.FC<IProps> = ({ children, className, isHidden, onClick, isDisabled, style, isCircular, type }) => {
  let Styled
  const handleClick = () => onClick && onClick()

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isCircular ? 'circular' : '' }`

  switch (type) {
    case 'secondary':
      Styled = Secondary
      break
    case 'tertiary':
      Styled = Tertiary
      break
    default:
      Styled = Primary
  }

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
