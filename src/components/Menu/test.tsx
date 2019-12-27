import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Menu from './'

test('Menu', () => {
  const component = renderer.create(
    <Provider>
      <Menu />
    </Provider>
  )
  expect(component).toBeTruthy()
})
