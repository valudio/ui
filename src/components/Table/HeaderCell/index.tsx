import React from 'react'
import { IBaseProps, ITableColumn } from '../../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  column: ITableColumn
}

const HeaderCell: React.FC<IProps> = ({ column }) => {
  const sort = !!column.sort
    ? <span className={ `sort ${ column.sort }` } />
    : null

  return (
    <Styled style={{ flex: column.size }}>
      <span className="label">{ column.label }</span>
      { sort }
    </Styled>
  )
}

export default HeaderCell
