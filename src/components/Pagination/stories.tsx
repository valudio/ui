import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator2 } from '../../helpers/storybook'
import Pagination from './'

storiesOf('Pagination', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator2)
  .add('default', () => <Pagination currentPage={ 13 } totalPages={ 20 } onClick={ alert } />)
  .add('disabled', () => <Pagination currentPage={ 1 } totalPages={ 20 } onClick={ alert } />)
