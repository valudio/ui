import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Input from './'

storiesOf('Input', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Input onChange={ alert } placeholder="Introduce your name" />)
  .add('disabled', () => <Input onChange={ alert } placeholder="Introduce your name" isDisabled />)
  .add('invalid', () => <Input onChange={ alert } placeholder="Introduce your name" isInvalid />)
  .add('hidden', () => <Input onChange={ alert } placeholder="Introduce your name" isHidden />)
  .add('password', () => <Input type="password" onChange={ alert } placeholder="Introduce your password" />)
  .add('with initial value', () => <Input onChange={ alert } initialValue="test" placeholder="Introduce your name" />)
