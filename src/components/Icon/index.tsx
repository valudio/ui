import React from 'react'
import { IBaseProps, IconName } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  icon: IconName
}

const Icon: React.FC<IProps> = ({ isHidden, className, icon }) => {
  if (isHidden) return null
  return <Styled className={ `${ className } ${ icon }` } />
}

export default Icon
