import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Pagination from './'

test('Pagination', () => {
  const component = renderer.create(
    <Provider>
      <Pagination totalPages={ 24 } currentPage={ 13 } onClick={ alert } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
