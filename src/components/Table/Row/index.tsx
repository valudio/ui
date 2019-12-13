import React from 'react'
import { IBaseProps, ITableColumn } from '../../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  item: any
  columns: ITableColumn[]
}

const Row: React.FC<IProps> = ({ item, columns }) => {
  const cells = columns.map((x, i) => (
    <div
      key={ i }
      className="cell"
      style={{ flex: x.size }}
      title={ typeof item[x.key] === 'string' ? item[x.key] : null }
    >{ item[x.key] }</div>
  ))

  return <Styled>{ cells }</Styled>
}

export default Row
