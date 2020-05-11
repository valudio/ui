import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'


const Tooltip: React.FC<IBaseProps> = ({ children, isHidden, className, style }) => {
  if (isHidden) return null
  return (
    <Styled className={ className || '' } style={ style }>
      { children }
    </Styled>
  )
}

export default Tooltip
