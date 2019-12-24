import React from 'react'
import { IBaseProps, ITableColumn } from '../../../models'
import Icon from '../../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  column: ITableColumn
}

const HeaderCell: React.FC<IProps> = ({ column }) => {
  const sort = !!column.sort
    ? <Icon className={ `sort ${ column.sort }` } icon={ column.sort === 'ASC' ? 'up' : 'down' } />
    : null

  if (column.isHidden) return null

  return (
    <Styled style={ column.style } onClick={ column.onClick }>
      <span className="label">{ column.label }</span>
      { sort }
    </Styled>
  )
}

export default HeaderCell
