import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Title from './'

storiesOf('Title', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Title>Valudio UI</Title>)
