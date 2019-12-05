import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Input from './'

test('Input', () => {
  const component = renderer.create(
    <Provider>
      <Input label="test" onChange={ alert } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
