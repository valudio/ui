import React from 'react'
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer'
import defaultTheme from '../../default-theme'
import { optionsMock } from '../../models'
import MultiSelect from '../MultiSelect'
import Provider from '../Provider'
import Item from './Item'

let component: ReactTestRenderer
let instance: ReactTestInstance

beforeEach(() => {
  component = create(
    <Provider theme={ defaultTheme }>
      <MultiSelect onChange={ alert } labelProp="label" options={ optionsMock } />
    </Provider>
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
