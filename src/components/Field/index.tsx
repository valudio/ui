import React, { PropsWithChildren } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  label: string
  isDisabled?: boolean
}

const Field: React.FC<PropsWithChildren<IProps>> = ({ children, isHidden, className, style, label, isDisabled }) => {
  if (isHidden) return null

  const classNames = `${ className || '' } ${ isDisabled ? 'disabled' : '' }`

  return (
    <Styled className={ classNames } style={ style }>
      <label className="label">{ label }</label>
      { children }
    </Styled>
  )
}

export default Field
