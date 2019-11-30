import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './'

// tslint:disable: max-line-length

storiesOf('Input', module)
  .add('default', () => <Input label="Name" onChange={ alert } placeholder="Introduce your name" />)
  .add('disabled', () => <Input label="Name" onChange={ alert } placeholder="Introduce your name" isDisabled />)
  .add('invalid', () => <Input label="Name" onChange={ alert } placeholder="Introduce your name" isInvalid />)
  .add('hidden', () => <Input label="Name" onChange={ alert } placeholder="Introduce your name" isHidden />)
