import { storiesOf } from '@storybook/react'
import React, { useEffect, useRef, useState } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import Input from './'

storiesOf('Input', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Input onChange={ alert } placeholder="Introduce your name" />)
  .add('disabled', () => <Input onChange={ alert } placeholder="Introduce your name" isDisabled />)
  .add('invalid', () => <Input onChange={ alert } placeholder="Introduce your name" isInvalid />)
  .add('password', () => <Input type="password" onChange={ alert } placeholder="Introduce your password" />)
  .add('with initial value', () => <Input onChange={ alert } initialValue="test" placeholder="Introduce your name" />)
  .add('with initial value and reset', () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [ initValue, setInitValue ] = useState('test')

    useEffect(() => {
      formRef.current.addEventListener('reset', () => setInitValue(''))

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        formRef.current.removeEventListener('reset', () => setInitValue)
      }
    }, [])

    return (
      <form ref={ formRef } >
        <Input
          form={ formRef.current || undefined }
          onChange={ alert }
          initialValue={ initValue }
          placeholder="Introduce your name"
        />
        <button type="reset">Reset value</button>
      </form>
    )
  })
