import React from 'react'
import { IBaseProps, ITableColumn } from '../../models'
import HeaderCell from './HeaderCell'
import Row from './Row'
import Styled from './styles'

interface IProps extends IBaseProps {
  columns: ITableColumn[]
  items: any[]
}

const Table: React.FC<IProps> = ({ className, items, columns }) => {
  const headerCells = columns.map((x, i) => <HeaderCell key={ i } column={ x } />)
  const rows = items.map((x, i) => <Row key={ i } item={ x } columns={ columns } />)

  return (
    <Styled className={ className }>
      <section className="header">{ headerCells }</section>
      <section className="content">{ rows }</section>
    </Styled>
  )
}

export default Table
