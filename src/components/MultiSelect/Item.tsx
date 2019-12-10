import React from 'react'

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
    <input type="checkbox" checked={ isSelected }/>
    <label className="label">{ label }</label>
  </li>
)

export default Item
