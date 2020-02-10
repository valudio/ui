import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Toggle from '../Toggle'
import Field from './'

storiesOf('Field', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Field label="test"><Toggle /></Field>)
