import { IBaseProps } from './base-props'

export interface ITableColumn {
  label: string
  key: string
  size?: number
}

export const tableColumnsMock: ITableColumn[] = [
  { label: 'Id', key: 'id', size: 0 },
  { label: 'Name', key: 'name' },
  { label: 'Description', key: 'description', size: 2 },
  { label: 'Status', key: 'status' }
]
