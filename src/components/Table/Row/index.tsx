import React from 'react'
import { IBaseProps, ITableColumn, ITableItem } from '../../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  item: ITableItem
  columns: ITableColumn[]
}

const Row: React.FC<IProps> = ({ item, columns, isHidden, className, style }) => {
  if (isHidden) return null

  const cells = columns.map((x, i) => {
    if (x.isHidden) return null

    return (
      <div
        key={ i }
        className="cell"
        style={ x.style }
        title={ typeof item[x.key] === 'string' ? item[x.key] : null }
        onClick={ item.onClick }
      >{ item[x.key] }</div>
    )
  })

  return <Styled className={ className || '' } style={ style }>{ cells }</Styled>
}

export default Row
