import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Pagination from './'

storiesOf('Pagination', module)
  .addDecorator(decorator)
  .add('default', () => <Pagination />)
