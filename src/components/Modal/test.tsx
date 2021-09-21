import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Modal from './'

test('Modal', () => {
  const component = renderer.create(
    <Provider>
      <Modal />
    </Provider>
  )
  expect(component).toBeTruthy()
})
