import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Table from './'

test('Table', () => {
  const component = renderer.create(
    <Provider>
      <Table columns={ [] } items={ [] } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
