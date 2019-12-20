import React from 'react'
import { IBaseProps } from '../../../models'
import Checkbox from '../../Checkbox'
import Styled from './styles'

interface IProps extends IBaseProps {
  label: string
  onClick: () => void
  isSelected: boolean
}

const Item: React.FC<IProps> = ({ isHidden, label, onClick, isSelected }) => {
  if (isHidden) return null

  return (
    <Styled
      className={ `option ${ isSelected ? 'selected' : '' }` }
      onClick={ onClick }
    >
      <Checkbox className="checkbox" defaultValue={ isSelected } />
      <label className="label">{ label }</label>
    </Styled>
  )
}

export default Item
