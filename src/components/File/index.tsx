import React from 'react'
import { FileType, IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
}

const File: React.FC<IProps> = props => {
  const { name, isHidden, className } = props

  if (isHidden) return null

  return (
    <Styled className={ className }>
      <span className="name">{ name }</span>
    </Styled>
  )
}

export default File
