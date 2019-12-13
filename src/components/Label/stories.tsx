import { storiesOf } from '@storybook/react'
import React from 'react'
import Label from '.'
import { decorator } from '../../helpers/storybook'

storiesOf('Label', module)
  .addDecorator(decorator)
  .add('default', () => <Label type="primary">Test</Label>)
  .add('info', () => <Label type="info"/>)
  .add('success', () => <Label type="success">Test</Label>)
  .add('warning', () => <Label type="warning">Test</Label>)
  .add('error', () => <Label type="error">Test</Label>)
  .add('hidden', () => <Label type="primary" isHidden>Test</Label>)
