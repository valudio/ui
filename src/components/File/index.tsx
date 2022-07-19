import React from 'react'
import { FileType, IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
  isDisabled?: boolean
  onClick?: () => void
}

const File: React.FC<IProps> = ({ name, isHidden, className, type, style, onClick, isDisabled }) => {
  if (isHidden) return null

  const classNames = `${ className || '' } ${ isDisabled ? 'disabled' : '' }`

  return (
    <Styled className={ classNames } style={ style } onClick={ !isDisabled && onClick }>
      <Icon className="icon" icon={ type } onClick={ !isDisabled && onClick } />
      <span className="name">{ name }</span>
    </Styled>
  )
}

export default File
