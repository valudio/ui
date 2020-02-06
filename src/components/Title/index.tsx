import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

const Title: React.FC<IBaseProps> = ({ children, isHidden, className, style }) => {
  if (isHidden) return null
  return <Styled className={ className || '' } style={ style }>{ children }</Styled>
}

export default Title
