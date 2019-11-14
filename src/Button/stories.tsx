import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from './'

storiesOf('Button', module)
  .add('red', () => <Button color="red" />)
  .add('blue', () => <Button color="blue" />)
