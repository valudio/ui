import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Label from './'

storiesOf('Bubble', module)
  .addDecorator(decorator)
  .add('default', () => <Label type="primary">Test</Label>)
  .add('info', () => <Label type="info">Test</Label>)
  .add('success', () => <Label type="success">Test</Label>)
  .add('warning', () => <Label type="warning">Test</Label>)
  .add('error', () => <Label type="error">Test</Label>)
  .add('hidden', () => <Label type="primary" isHidden>Test</Label>)
