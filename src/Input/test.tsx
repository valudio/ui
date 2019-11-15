import React from 'react'
import renderer from 'react-test-renderer'
import Input from './'

test('Input', () => {
  const component = renderer.create(<Input onChange={ alert } />)
  expect(component).toBeTruthy()
})
