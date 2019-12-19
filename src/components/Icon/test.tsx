import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Icon from './'

test('Icon', () => {
  const component = renderer.create(
    <Provider>
      <Icon icon="ok" />
    </Provider>
  )
  expect(component).toBeTruthy()
})
