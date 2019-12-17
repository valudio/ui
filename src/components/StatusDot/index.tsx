import React from 'react'
import { IBaseProps, StatusType } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type?: StatusType
}

const StatusDot: React.FC<IProps> = ({ type, style }) => {
  return <Styled style={ style } className={ `label ${ type || '' }` } />
}

export default StatusDot
