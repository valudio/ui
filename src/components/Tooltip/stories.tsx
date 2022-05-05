import { storiesOf } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import Tooltip from '.'

// tslint:disable: jsx-no-lambda
storiesOf('Tooltip', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => {
    const [ isTooltipVisible, setIsTooltipVisible ] = useState(false)
    const divRef = useRef<HTMLDivElement>(null)

    return (
      <div
        ref={ divRef }
        style={ { position: 'relative', cursor: 'pointer' } }
        onMouseEnter={ () => setIsTooltipVisible(true) }
        onMouseLeave={ () => setIsTooltipVisible(false) }
      >
        <h3 className="hover-item">Hover me!</h3>
        <Tooltip triggerRef={ divRef } isHidden={ !isTooltipVisible }>
          <h3>Tooltip title</h3>
          <span>Tooltip content asdfasdfasdefasdfasdfasdf long content</span>
        </Tooltip>
      </div>
    )
  })
