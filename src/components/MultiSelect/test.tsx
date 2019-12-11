import React from 'react'
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer'
import { optionsMock } from '../../models'
import MultiSelect from '../MultiSelect'
import Item from './item'

let component: ReactTestRenderer
let instance: ReactTestInstance

beforeEach(() => {
  component = create(
    <MultiSelect onChange={ alert } labelProp="label" options={ optionsMock } />
  )
  instance = component.root
})

describe('MultiSelect', () => {
  it('should be correctly rendered', () => {
    expect(component).toBeTruthy()
  })

  it('options are hidden by default', () => {
    expect(instance.findAllByType(Item)).toEqual([])
  })

  it('options are shown after click on selected label', () => {
    const selected = instance.findByType('div')
    act(() => {
      selected.props.onClick()
    })
    expect(instance.findAllByType(Item).length).toEqual(5)
  })
})
