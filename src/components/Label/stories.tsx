import { storiesOf } from '@storybook/react'
import React from 'react'
import Label from '.'
import Provider from '../Provider'

storiesOf('Label', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Label text="Label" className="primary"/>)
  .add('info', () => <Label text="Label" className="info"/>)
  .add('success', () => <Label text="Label" className="success"/>)
  .add('warning', () => <Label text="Label" className="warning"/>)
  .add('error', () => <Label text="Label" className="error"/>)
  .add('hidden', () => <Label text="Label" isHidden/>)
