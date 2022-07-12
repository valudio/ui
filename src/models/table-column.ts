import { IBaseProps } from './base-props'

export interface ITableColumn extends IBaseProps {
  label: string
  key: string
  sort?: 'DESC' | 'ASC' | 'INACTIVE'
  onClick?: () => void
  isCheckable?: boolean
  onCheck?: (checked: boolean) => void
}

export const tableColumnsMock: ITableColumn[] = [
  // tslint:disable-next-line:no-console
  { label: '', key: 'archived', style: { flex: 0.1 }, isCheckable: true, onCheck: (checked) => console.log(checked) },
  { label: 'Partner name', key: 'partnerName', sort: 'ASC' },
  { label: 'Description', key: 'description', style: { flex: 4 }},
  { label: 'Exchanges', key: 'exchanges', style: { flex: 2 }},
  { label: 'Date', key: 'date', sort: 'INACTIVE' },
  { label: 'Message type', key: 'messageType', sort: 'INACTIVE', style: { flex: 2 }},
  { label: '', key: 'status', style: { flex: 0.2 }}
]
