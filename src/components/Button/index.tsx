import React from 'react'
import { IBaseProps } from '../../models'
import Spinner from '../Spinner'
import { Primary, Secondary, Tertiary } from './styles'

interface IProps extends IBaseProps {
  onClick?: () => void
  isDisabled?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
  isCircular?: boolean
  isLoading?: boolean
}

// tslint:disable-next-line: max-line-length
const Button: React.FC<IProps> = ({ children, className, isHidden, onClick, isDisabled, style, isCircular, isLoading, type }) => {
  let Styled
  const handleClick = () => onClick && onClick()

  if (isHidden) return null

  const classNames = `${ className ? className : '' } ${ isCircular ? 'circular' : '' }`
  const content = isLoading ? <Spinner className="button"/> : children

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
      type="button"
      className={ classNames }
      onClick={ handleClick }
      disabled={ isDisabled || isLoading }
      style={ style }
    >{ content }</Styled>
  )
}

export default Button
