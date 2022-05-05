import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator2 } from '../../helpers'
import { tableColumnsMock } from '../../models'
import File from '../File'
import Icon from '../Icon'
import StatusDot from '../StatusDot'
import List from './'

const items = [
  {
    archived: null,
    partnerName: 'Lorem ipsum dolor sit amet.',
    // eslint-disable-next-line max-len
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra neque, eleifend tempus mauris. Aliquam vel porttitor eros a egestas purus. Etiam et hendrerit ut vulputate justo a sed.',
    exchanges: (
      <>
        <div className="file-container" style={ { marginBottom: 8 } }>
          <File name="FRSO_ADV16_..." type="txt" />
          <Icon icon="sent" className="icon" />
        </div>
        <div className="file-container">
          <File name="FRSO_ADV16" type="pdf" />
          <Icon icon="received" className="icon" />
        </div>
      </>
    ),
    date: '10/09/2019 11:02 AM',
    messageType: 'Despatch Advise',
    status: <StatusDot type="success" />
  },
  {
    archived: null,
    partnerName: 'Lorem ipsum dolor sit amet.',
    // eslint-disable-next-line max-len
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra neque, eleifend tempus mauris. Aliquam vel porttitor eros a egestas purus. Etiam et hendrerit ut vulputate justo a sed.',
    exchanges: (
      <div className="file-container">
        <File name="FRSO_ADV16" type="pdf" />
        <Icon icon="sent" className="icon" />
      </div>
    ),
    date: '10/09/2019 11:02 AM',
    messageType: 'Order',
    status: <StatusDot type="error" />,
    onClick: () => alert('row click!')
  }
]

// tslint:disable: max-line-length
storiesOf('Table', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator2)
  .add('default', () => <List columns={ tableColumnsMock } items={ items } />)
  .add('empty', () => <List columns={ tableColumnsMock } items={ [] } fallbackMessage="This is a test fallback" />)
  .add(
    'hidden column',
    () => <List columns={ [ ...tableColumnsMock, { ...tableColumnsMock[0], isHidden: true } ] } items={ items } />
  )
