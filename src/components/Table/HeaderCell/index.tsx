import React from 'react'
import { Checkbox } from '../../../index'
import { IBaseProps, ITableColumn } from '../../../models'
import Icon from '../../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  column: ITableColumn
}

const HeaderCell: React.FC<IProps> = ({ column }) => {
  const handleColumnCheck = (checked: boolean) => {
    if (column.onCheck && typeof column.onCheck === 'function') column.onCheck(checked)
  }

  const sort = column.sort
    ? <Icon className={ `sort ${ column.sort }` } icon={ column.sort === 'ASC' ? 'up' : 'down' } />
    : null

  if (column.isHidden) return null

  return (
    <Styled style={ column.style } onClick={ column.onClick }>
      {/* tslint:disable-next-line:jsx-no-multiline-js */}
      {
        column.isCheckable
          ? <Checkbox onChange={ handleColumnCheck } />
          : null
      }
      <span className="label">{ column.label }</span>
      { sort }
    </Styled>
  )
}

export default HeaderCell
