import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Title from './'

storiesOf('Title', module)
  .addDecorator(decorator)
  .add('default', () => <Title>Valudio UI</Title>)
