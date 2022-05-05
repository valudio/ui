import React, { PropsWithChildren } from 'react'
import { IBaseProps, IconName, StatusType } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  type: StatusType
  message: string
}

const Snackbar: React.FC<PropsWithChildren<IProps>> = ({ isHidden, style, className, type, message, children }) => {
  if (isHidden) return null
  let iconName: IconName

  switch (type) {
    case 'info':
      iconName = 'info'
      break
    case 'success':
      iconName = 'ok'
      break
    case 'warning':
      iconName = 'attention'
      break
    case 'error':
      iconName = 'close'
      break
    default:
      iconName = 'info'
  }

  return (
    <Styled style={ style } className={ `${ className } ${ type }` }>
      <Icon icon={ iconName } className="icon" />
      <span className="message" dangerouslySetInnerHTML={{ __html: message }} />
      { children ?? null }
    </Styled>
  )
}

export default Snackbar
