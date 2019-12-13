import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator2 } from '../../helpers/storybook'
import { tableColumnsMock } from '../../models'
import File from '../File'
import StatusDot from '../StatusDot'
import List from './'

const items = [
  {
    archived: null,
    partnerName: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra neque, eleifend tempus mauris. Aliquam vel porttitor eros a egestas purus. Etiam et hendrerit ut vulputate justo a sed.',
    exchanges: (
      <>
        <File name="FRSO_ADV16_..." type="doc" className="file-margin" />
        <File name="FRSO_ADV16" type="pdf" />
      </>
    ),
    date: '10/09/2019 11:02 AM',
    messageType: 'Despatch Advise',
    status: <StatusDot type="success" />
  },
  {
    archived: null,
    partnerName: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra neque, eleifend tempus mauris. Aliquam vel porttitor eros a egestas purus. Etiam et hendrerit ut vulputate justo a sed.',
    exchanges: <File name="FRSO_ADV16" type="pdf" />,
    date: '10/09/2019 11:02 AM',
    messageType: 'Order',
    status: <StatusDot type="error" />
  },
]

storiesOf('Table', module)
  .addDecorator(decorator2)
  .add('default', () => <List columns={ tableColumnsMock } items={ items } />)
