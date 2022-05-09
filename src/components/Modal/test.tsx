import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Modal from './'

/**
 * @jest-environment node || jsdom
 */

test('Modal', () => {
  const component = renderer.create(
    <Provider>
      <Modal isHidden />
    </Provider>
  )
  expect(component).toBeTruthy()
})
