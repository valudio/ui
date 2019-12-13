import { DecoratorFunction } from '@storybook/addons'
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types'
import React from 'react'
import Provider from '../components/Provider'

export const decorator: DecoratorFunction<StoryFnReactReturnType> = x => (
  <article style={ { display: 'flex' } }>
    <Provider>{ x() }</Provider>
  </article>
)
