import React from 'react'
import { IBaseProps, LabelType } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: LabelType
}

const Label: React.FC<IProps> = props => {
  const { children, isHidden, type } = props
  const classNames = `label ${ type }`

  if (isHidden) return null

  return <Styled className={ classNames }>{ children }</Styled>
}

export default Label
