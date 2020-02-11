import { IBaseProps } from './base-props'

export interface IInputProps<T> extends IBaseProps {
  onChange: (value: T) => void
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
  initialValue?: T
  form?: HTMLFormElement
}
