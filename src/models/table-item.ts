import { IBaseProps } from './base-props'

export interface ITableItem extends IBaseProps {
  id: string
  onClick?: () => void
  [key: string]: any
}
