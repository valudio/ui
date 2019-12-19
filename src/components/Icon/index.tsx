import React from 'react'
import { IBaseProps, IconName } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  icon: IconName
  onClick?: () => void
}

const Icon: React.FC<IProps> = ({ isHidden, className, icon, style, onClick }) => {
  if (isHidden) return null
  return <Styled className={ `${ className } ${ icon }` } style={ style } onClick={ onClick } />
}

export default Icon
