import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './'

storiesOf('Input', module)
  // tslint:disable-next-line: no-console
  .add('standard', () => <Input onChange={ console.log } />)
