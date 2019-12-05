import React from 'react'
import renderer from 'react-test-renderer'
import Button from './'

test('Button', () => {
  const component = renderer.create(<Button />)
  expect(component).toBeTruthy()
})
