import { IconName } from './icon-name'

export interface IMenuItem {
  onClick: () => void
  icon: IconName
  label: string
}

export const menuItemsMock: IMenuItem[] = [
  { icon: 'dashboard', label: 'Dashboard', onClick: alert },
  { icon: 'calendar', label: 'Calendar', onClick: alert }
]
