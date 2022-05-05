import React, { PropsWithChildren } from 'react'
import { IBaseProps, StatusType } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: StatusType
}

const Bubble: React.FC<PropsWithChildren<IProps>> = ({ children, isHidden, className, type, style }) => {
  if (isHidden) return null
  return <Styled className={ `${ className } ${ type }` } style={ style }>{ children }</Styled>
}

export default Bubble
