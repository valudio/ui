import React from 'react'
import { IBaseProps, ITableColumn } from '../../models'
import HeaderCell from './HeaderCell'
import Row from './Row'
import Styled from './styles'

interface IProps extends IBaseProps {
  columns: ITableColumn[]
  items: any[]
  fallbackMessage?: string
}

const Table: React.FC<IProps> = ({ className, items, columns, fallbackMessage, style }) => {
  const headerCells = columns.map((x, i) => <HeaderCell key={ i } column={ x } />)
  const content = !!items.length
    ? items.map((x, i) => <Row key={ i } item={ x } columns={ columns } />)
    : <span className="fallback-message">{ fallbackMessage || 'No content provided' }</span>

  return (
    <Styled className={ className } style={ style }>
      <section className="header">{ headerCells }</section>
      <section className="content">{ content }</section>
    </Styled>
  )
}

export default Table
