import { DecoratorFunction } from '@storybook/addons'
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types'
import React from 'react'
import Provider from '../components/Provider'
import defaultTheme from '../default-theme'

export const decorator: DecoratorFunction<StoryFnReactReturnType> = x => (
  <article style={ { display: 'flex' } }>
    <Provider>{ x() }</Provider>
  </article>
)

export const decorator2: DecoratorFunction<StoryFnReactReturnType> = x => (
  <article style={ { display: 'flex', background: defaultTheme.colors.grey.medium, padding: '20px' } }>
    <Provider>{ x() }</Provider>
  </article>
)
