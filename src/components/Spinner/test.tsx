import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Spinner from './'

test('Spinner', () => {
  const component = renderer.create(
    <Provider>
      <Spinner />
    </Provider>
  )
  expect(component).toBeTruthy()
})
