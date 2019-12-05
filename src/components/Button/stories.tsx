import { storiesOf } from '@storybook/react'
import React from 'react'
import Provider from '../Provider'
import Button from './'

storiesOf('Button', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Button>Click me!</Button>)
  .add('disabled', () => <Button isDisabled>Click me!</Button>)
  .add('secondary', () => <Button isSecondary>Click me!</Button>)
  .add('hidden', () => <Button isHidden>Click me!</Button>)
