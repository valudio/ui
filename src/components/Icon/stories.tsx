import { storiesOf } from '@storybook/react'
import React from 'react'
import Provider from '../Provider'
import Icon from './'

storiesOf('Icon', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Icon className="icon" icon="calendar" />)
  .add('clickable', () => <Icon className="icon" icon="calendar" onClick={ alert } />)
  .add('icons list', () => (
    <div className="icon-list">
      <Icon className="icon" icon="add" />
      <Icon className="icon" icon="atention" />
      <Icon className="icon" icon="calendar" />
      <Icon className="icon" icon="check" />
      <Icon className="icon" icon="close" />
      <Icon className="icon" icon="dashboard" />
      <Icon className="icon" icon="down" />
      <Icon className="icon" icon="download" />
      <Icon className="icon" icon="filter" />
      <Icon className="icon" icon="info" />
      <Icon className="icon" icon="language" />
      <Icon className="icon" icon="left" />
      <Icon className="icon" icon="ok" />
      <Icon className="icon" icon="points" />
      <Icon className="icon" icon="received" />
      <Icon className="icon" icon="right" />
      <Icon className="icon" icon="search" />
      <Icon className="icon" icon="sent" />
      <Icon className="icon" icon="up" />
      <Icon className="icon" icon="eye" />
      <Icon className="icon" icon="hide" />
      <Icon className="icon" icon="pdf" />
      <Icon className="icon" icon="img" />
      <Icon className="icon" icon="edi" />
      <Icon className="icon" icon="baan" />
      <Icon className="icon" icon="xml" />
      <Icon className="icon" icon="sap" />
      <Icon className="icon" icon="excel" />
      <Icon className="icon" icon="html" />
      <Icon className="icon" icon="ifs" />
      <Icon className="icon" icon="txt" />
    </div>
  ))
