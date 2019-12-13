import React from 'react'
import { IBaseProps, StatusType } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: StatusType
}

const Label: React.FC<IProps> = props => {
  const { children, isHidden, type } = props

  if (isHidden) return null

  return <Styled className={ `label ${ type }` }>{ children }</Styled>
}

export default Label
