export interface IOption {
  id: string
  [key: string]: string
}

export const optionsMock: IOption[] = [
  { id: '1', value: 'Option 1 aa' },
  { id: '2', value: 'Option 2 bb' },
  { id: '3', value: 'Option 3 cc' },
  { id: '4', value: 'Option 4 aa' },
  { id: '5', value: 'Option 5 bb' },
  { id: '6', value: 'Option 6 cc' },
  { id: '7', value: 'Option 7 dd' },
  { id: '8', value: 'Looooooooooooooooooooooooooooooooooooong' }
]
