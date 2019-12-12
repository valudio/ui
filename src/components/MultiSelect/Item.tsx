import React from 'react'
import Checkbox from '../Checkbox'

interface IProps {
  label: string
  onClick: () => void
  isSelected: boolean
}

const Item: React.FC<IProps> = ({ label, onClick, isSelected }) => (
  <li
    className={ `option ${ isSelected ? 'selected' : '' }` }
    onClick={ onClick }
  >
    <Checkbox isChecked={ isSelected }/>
    <label className="label">{ label }</label>
  </li>
)

export default Item
