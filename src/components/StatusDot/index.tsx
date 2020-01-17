import React from 'react'
import { IBaseProps, StatusType } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type?: StatusType
}

const StatusDot: React.FC<IProps> = ({ isHidden, className, type, style }) => {
  if (isHidden) return null

  return <Styled style={ style } className={ `${ className } ${ type || '' }` } />
}

export default StatusDot
