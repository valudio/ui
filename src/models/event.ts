export interface IEvent<T> {
  data: T
  date: IEventDate
}

export interface IEventDate {
  day: string
  fromHour: string
  toHour: string
}

export const initialEventDate: IEventDate = {
  day: '',
  fromHour: '',
  toHour: ''
}
