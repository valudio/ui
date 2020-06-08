import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import Provider from '../Provider'
import Icon from './'

storiesOf('Icon', module)
  .addDecorator(jsxDecorator)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Icon className="icon" icon="calendar" />)
  .add('clickable', () => <Icon className="icon" icon="calendar" onClick={ alert } />)
  .add('icons list', () => (
    <div 
      className="icon-list"
      style={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
    >
      <Icon className="icon" icon="add" />
      <Icon className="icon" icon="attention" />
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
      <Icon className="icon" icon="menu" />
      <Icon className="icon" icon="user" />
      <Icon className="icon" icon="map" />
      <Icon className="icon" icon="edit" />
      <Icon className="icon" icon="print" />
      <Icon className="icon" icon="documents" />
      <Icon className="icon" icon="delete" />
      <Icon className="icon" icon="reports" />
      <Icon className="icon" icon="projects" />
      <Icon className="icon" icon="worksteps" />
      <Icon className="icon" icon="workers" />
      <Icon className="icon" icon="material" />
      <Icon className="icon" icon="home" />
      <Icon className="icon" icon="change-password" />
      <Icon className="icon" icon="customer"/>
      <Icon className="icon" icon="sign-out"/>
      <Icon className="icon" icon="validation" />
      <Icon className="icon" icon="validation-expert" />
      <Icon className="icon" icon="error" />
      <Icon className="icon" icon="warning" />
      <Icon className="icon" icon="export" />
      <Icon className="icon" icon="export-emergency" />
      <Icon className="icon" icon="share" />
      <Icon className="icon" icon="template" />
      <Icon className="icon" icon="sample-assign" />
      <Icon className="icon" icon="assay-assign" />
      <Icon className="icon" icon="well-view" />
      <Icon className="icon" icon="target-view" />
      <Icon className="icon" icon="plate-view" />
      <Icon className="icon" icon="refresh" />
      <Icon className="icon" icon="group-validation" />
      <Icon className="icon" icon="legend" />
      <Icon className="icon" icon="sync" />
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
