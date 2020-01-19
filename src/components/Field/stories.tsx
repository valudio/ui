import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Toggle from '../Toggle'
import Field from './'

storiesOf('Field', module)
  .addDecorator(decorator)
  .add('default', () => <Field label="test"><Toggle /></Field>)
  