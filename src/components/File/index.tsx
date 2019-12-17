import React, { ReactNode } from 'react'
import { FileType, IBaseProps, Transference } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
  transference?: Transference
}

const File: React.FC<IProps> = props => {
  const { name, isHidden, className, type, transference } = props
  const transferenceIcon = (): ReactNode => {
    if (!transference) return null
    if (transference === 'outbound') return <Icon className="transference" icon="sent" />
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
