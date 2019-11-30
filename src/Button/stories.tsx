import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from './'

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('disabled', () => <Button isDisabled />)
  .add('secondary', () => <Button isSecondary />)
  .add('hidden', () => <Button isHidden />)
