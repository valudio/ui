import React, { ChangeEvent } from 'react'

interface IProps {
  onChange?: (value: string) => void
}

export default (props: IProps) => {
  const { onChange } = props
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value)

  return <input onChange={ handleChange } />
}
