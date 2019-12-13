import { storiesOf } from '@storybook/react'
import React from 'react'
import File from '.'
import { decorator } from '../../helpers/storybook'

storiesOf('File', module)
  .addDecorator(decorator)
  .add('default', () => <File name="FRSO_ADV16_..." type="doc" />)
