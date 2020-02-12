import { IBaseProps } from './base-props'

export interface ITableItem extends IBaseProps {
  onClick?: () => void
  [key: string]: any
}
