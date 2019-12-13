export interface ITableColumn {
  label: string
  key: string
  size?: number
  sort?: 'DESC' | 'ASC' | 'INACTIVE'
}

export const tableColumnsMock: ITableColumn[] = [
  { label: '', key: 'archived', size: 0.1 },
  { label: 'Partner name', key: 'partnerName', sort: 'ASC' },
  { label: 'Description', key: 'description', size: 4 },
  { label: 'Exchanges', key: 'exchanges', size: 2 },
  { label: 'Date', key: 'date', sort: 'INACTIVE' },
  { label: 'Message type', key: 'messageType', sort: 'INACTIVE', size: 2 },
  { label: 'Message type', key: 'status' }
]
