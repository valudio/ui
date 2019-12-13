import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import { tableColumnsMock } from '../../models'
import Label from '../Label'
import List from './'

const items = [
  { id: '1', name: 'Test 1', description: 'This is the first test', status: <Label type="error">Oops!</Label> },
  { id: '2', name: 'Test 2', description: 'This is the seconds test', status: <Label type="success">Great!</Label> },
  { id: '3', name: 'Test 3', description: 'This is the third test', status: <Label type="warning">Atention!</Label> },
  { id: '4', name: 'Test 4', description: 'This is the fourth test', status: <Label type="primary">Watermelon</Label> },
  { id: '5', name: 'Test 5', description: 'This is the fifth test', status: <Label type="info">Knowledge</Label> }
]

storiesOf('Table', module)
  .addDecorator(decorator)
  .add('default', () => <List columns={ tableColumnsMock } items={ items } />)
