import React, { ReactNode } from 'react'
import { FileType, IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
  isUserOwner?: boolean
}

const File: React.FC<IProps> = props => {
  const { name, isHidden, className, type, isUserOwner } = props

  const transferenceIcon = (): ReactNode => {
    if (isUserOwner === undefined) return null
    if (isUserOwner) return <Icon className="transference" icon="sent" />
    else return <Icon className="transference" icon="received" />
  }

  if (isHidden) return null

  return (
    <Styled className={ className }>
      <div className="file">
        <Icon className="icon" icon={ type } />
        <span className="name">{ name }</span>
      </div>
      { transferenceIcon() }
    </Styled>
  )
}

export default File
