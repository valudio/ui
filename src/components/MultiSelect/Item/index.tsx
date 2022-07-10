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

  const handleClick = () => {
    onClick()
  }

  return (
    <Styled className={ `option ${ isSelected ? 'selected' : '' }` }>
      <button onClick={ handleClick }>
        <Checkbox className="checkbox" value={ isSelected } onChange={ null } />
        <label className="label">{ label }</label>
      </button>
    </Styled>
  )
}

export default Item
