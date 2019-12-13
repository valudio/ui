export interface IOption {
  id: string
  [key: string]: string
}

export const optionsMock: IOption[] = [
  { id: '1', value: 'Option 1' },
  { id: '2', value: 'Option 2' },
  { id: '3', value: 'Option 3' },
  { id: '4', value: 'Option 4' },
  { id: '5', value: 'Option 5' },
  { id: '6', value: 'Option 6' },
  { id: '7', value: 'Option 7' }
]
