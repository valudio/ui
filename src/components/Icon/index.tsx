import React from 'react'
import { IBaseProps, IconName } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  icon: IconName
  onClick?: () => void
}

const Icon: React.FC<IProps> = ({ isHidden, className, icon, style, onClick }) => {
  if (isHidden) return null

  const classNames =  `${ className || '' } ${ !!onClick ? 'clickable' : '' } ${ icon }`

  return <Styled className={ classNames } style={ style } onClick={ onClick } />
}

export default Icon
