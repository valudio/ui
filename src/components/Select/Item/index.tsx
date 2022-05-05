import React, { PropsWithChildren } from 'react'
import { IBaseProps } from '../../../models'
import Icon from '../../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  onClick: () => void
  isSelected: boolean
}

const Item: React.FC<PropsWithChildren<IProps>> = ({ isHidden, children, onClick, isSelected }) => {
  if (isHidden) return null

  return (
    <Styled
      className={ `option ${ isSelected ? 'selected' : '' }` }
      onClick={ onClick }
    >
      <span className="label">{ children }</span>
      <Icon isHidden={ !isSelected } icon="check" />
    </Styled>
  )
}

export default Item
