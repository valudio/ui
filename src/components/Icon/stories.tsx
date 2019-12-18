import { storiesOf } from '@storybook/react'
import React from 'react'
import Provider from '../Provider'
import Icon from './'

storiesOf('Icon', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Icon icon="calendar" />)
  .add('icons', () => (
    <>
      <Icon icon="add" />
      <Icon icon="atention" />
      <Icon icon="calendar" />
      <Icon icon="check" />
      <Icon icon="close" />
      <Icon icon="dashboard" />
      <Icon icon="down" />
      <Icon icon="up" />
      <Icon icon="download" />
      <Icon icon="filter" />
      <Icon icon="info" />
      <Icon icon="language" />
      <Icon icon="left" />
      <Icon icon="ok" />
      <Icon icon="points" />
      <Icon icon="received" />
      <Icon icon="right" />
      <Icon icon="search" />
      <Icon icon="sent" />
      <Icon icon="pdf" />
      <Icon icon="img" />
      <Icon icon="edi" />
      <Icon icon="baan" />
      <Icon icon="xml" />
      <Icon icon="sap" />
      <Icon icon="excel" />
      <Icon icon="html" />
      <Icon icon="ifs" />
      <Icon icon="txt" />
    </>
  ))
