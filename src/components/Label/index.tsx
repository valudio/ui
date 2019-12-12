import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  text: string
  className?: string
}

const Label: React.FC<IProps> = props => {
  const { text, className, isHidden } = props
  const classNames = `label ${ className ? className : '' }`

  if (isHidden) return null

  return <Styled className={ classNames }>{ text }</Styled>
}

export default Label
