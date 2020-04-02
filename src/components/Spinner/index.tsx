import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

const Spinner: React.FC<IBaseProps> = ({ isHidden, style, className }) => {
  if (isHidden) return null

  const classNames = `${ className ? className : '' }`

  return (
    <Styled className={ classNames } style={ style }>
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </Styled>
  )
}

export default Spinner
