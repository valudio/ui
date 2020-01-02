import React from 'react'
import { FileType, IBaseProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: FileType
  name: string
  isDisabled?: boolean
  onClick?: () => void
}

const File: React.FC<IProps> = ({ name, isHidden, className, type, style, onClick, isDisabled }) => {
  if (isHidden) return null
  const classNames = `${ className || '' } ${ isDisabled ? 'disabled' : '' }`
  let icon

  if (type === 'sap' || type === 'idoc') {
    icon = 'sap'
  } else if (type === 'excel' || type === 'xls' || type === 'csv') {
    icon = 'excel'
  } else if (type === 'jpg' || type === 'jpeg' || type === 'png' || type === 'tif' || type === 'tiff') {
    icon = 'img'
  } else {
    icon = type
  }

  return (
    <Styled className={ classNames } style={ style } onClick={ !isDisabled && onClick }>
      <Icon className="icon" icon={ icon } />
      <span className="name">{ name }</span>
    </Styled>
  )
}

export default File
