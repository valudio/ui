import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import File from './'

storiesOf('File', module)
  .addDecorator(decorator)
  .add('default', () => <File name="FRSO_ADV16_12345333123412" type="txt" />)
  .add('excel', () => <File name="FRSO_ADV16_12345333123412" type="excel" />)
  .add('pdf', () => <File name="FRSO_ADV16_12345333123412" type="pdf" />)
