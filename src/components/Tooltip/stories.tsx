import { storiesOf } from '@storybook/react'
import React, { useEffect, useRef, useState } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import Tooltip from '.'
import { decorator } from '../../helpers/storybook'

// tslint:disable: jsx-no-lambda
storiesOf('Tooltip', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)


    return (
      <div
        style={ { position: 'relative', cursor: 'pointer' } }
        onMouseEnter={ () => setIsTooltipVisible(true) }
        onMouseLeave={ () => setIsTooltipVisible(false) }
      >
        <h3 className="hover-item">Hover me!</h3>
        <Tooltip isHidden={ !isTooltipVisible }>
          <h3>Tooltip title</h3>
          <span>Tooltip content</span>
        </Tooltip>
      </div>
    )
  })
