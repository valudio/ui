import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Icon from '../Icon'
import Button from './'

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Button>Click me!</Button>)
  .add('circular', () => <Button isCircular><Icon icon="edit" /></Button>)
  .add('default loading', () => <Button isLoading>Click me!</Button>)
  .add('disabled', () => <Button isDisabled>Click me!</Button>)
  .add('secondary', () => <Button type="secondary">Click me!</Button>)
  .add('secondary disabled', () => <Button type="secondary" isDisabled>Click me!</Button>)
  .add('secondary circular', () => <Button isCircular type="secondary"><Icon icon="edit" /></Button>)
  .add('tertiary', () => <Button type="tertiary">Click me!</Button>)
  .add('tertiary disabled', () => <Button type="tertiary" isDisabled>Click me!</Button>)
  .add('tertiary circular', () => <Button isCircular type="tertiary"><Icon icon="edit" /></Button>)
