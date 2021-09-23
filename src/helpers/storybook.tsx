import { DecoratorFunction } from '@storybook/addons'
import React, { ReactElement } from 'react'
import Provider from '../components/Provider'
import defaultTheme from '../default-theme'

export const decorator: DecoratorFunction<ReactElement<unknown>> = x => (
  <article style={ { display: 'flex' } }>
    <Provider>{ x() }</Provider>
  </article>
)

export const decorator2: DecoratorFunction<ReactElement<unknown>> = x => (
  <article style={ { display: 'flex', background: defaultTheme.colors.grey.medium, padding: '20px' } }>
    <Provider>{ x() }</Provider>
  </article>
)
