import React from 'react'
import { IBaseProps, ITableColumn } from '../../models'
import Row from './Row'
import Styled from './styles'

interface IProps extends IBaseProps {
  columns: ITableColumn[]
  items: any[]
}

const Table: React.FC<IProps> = ({ className, items, columns }) => {
  const rows = items.map((x, i) => <Row key={ i } item={ x } columns={ columns } />)
  return <Styled className={ className }>{ rows }</Styled>
}

export default Table
