import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Icon from '../Icon'
import Button from './'

storiesOf('Button', module)
  .addDecorator(decorator)
  .add('default', () => <Button>Click me!</Button>)
  .add('disabled', () => <Button isDisabled>Click me!</Button>)
  .add('secondary', () => <Button isSecondary>Click me!</Button>)
  .add('secondary disabled', () => <Button isSecondary isDisabled>Click me!</Button>)
  .add('hidden', () => <Button isHidden>Click me!</Button>)
  .add('circular', () => <Button isCircular><Icon icon="edit" /></Button>)
  .add('circular secondary', () => <Button isCircular isSecondary><Icon icon="edit" /></Button>)
