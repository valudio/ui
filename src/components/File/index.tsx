import React from 'react'
import { FileType, IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
  onClick?: () => void
}

const File: React.FC<IProps> = ({ name, isHidden, className, type, style, onClick }) => {
  if (isHidden) return null

  return (
    <Styled className={ className } style={ style } onClick={ onClick }>
      <Icon className="icon" icon={ type } />
      <span className="name">{ name }</span>
    </Styled>
  )
}

export default File
