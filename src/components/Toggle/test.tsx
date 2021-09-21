import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Toggle from './'

test('Toggle', () => {
  const component = renderer.create(
    <Provider>
      <Toggle onChange={ jest.fn() } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
