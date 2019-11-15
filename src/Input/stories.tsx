import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './'

storiesOf('Input', module)
  .add('standard', () => <Input onChange={ alert } />)
