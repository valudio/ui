import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { IInputProps } from '../../models'
import Icon from '../Icon'
import Styled from './styles'

const FileInput: React.FC<IInputProps<File>> = ({ onChange, isDisabled, className, form , isInvalid }) => {
  const [ file, setFile ] = useState<File | null>()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const classNames = `${ className || '' } ${ isDisabled ? 'disabled' : '' } ${ isInvalid ? 'invalid' : '' }`

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.item(0)
    setFile(nextFile)
    if (onChange) onChange(nextFile)
  }

  const handleSelectClick = () => {
    fileInputRef.current?.click()
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setFile.bind(undefined, null))
  }, [ form ])

  return (
    <Styled className={ classNames }>
      <input className="name" type="text" value={ file?.name || '' } disabled />
      <button onClick={ handleSelectClick } disabled={ isDisabled }><Icon icon="documents"/></button>
      <input ref={ fileInputRef } type="file" name="file" onChange={ handleChange } hidden />
    </Styled>
  )
}

export default FileInput
