import { storiesOf } from '@storybook/react'
import React from 'react'
import File from '.'
import { decorator } from '../../helpers/storybook'

storiesOf('File', module)
  .addDecorator(decorator)
  .add('default', () => <File name="FRSO_ADV16_12345333123412" type="txt" />)
  .add('inbound', () => <File name="FRSO_ADV16_12345333123412" type="excel" transference="outbound" />)
  .add('outbound', () => <File name="FRSO_ADV16_12345333123412" type="pdf" transference="inbound" />)
