import React, { RefObject, useEffect, useRef } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  triggerRef: RefObject<HTMLElement>
}

const Tooltip: React.FC<IProps> = ({ children, isHidden, className, style, triggerRef }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const isTooltipInViewport = () => {
    const tooltipCoords = tooltipRef.current.getBoundingClientRect()
    // tslint:disable-next-line: no-console
    console.log('TooltipCoords', tooltipCoords)

    return tooltipCoords.top >= 0 ||
      tooltipCoords.left >= 0 ||
      tooltipCoords.right <= (window.innerWidth || document.documentElement.clientWidth) ||
      tooltipCoords.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  }

  const positionTooltip = () => {
    const parentCoords = triggerRef.current.getBoundingClientRect()

    // tslint:disable-next-line: no-console
    console.log('IS IN?', isTooltipInViewport())

    if (isTooltipInViewport()) {
      tooltipRef.current.style.top = `${ parentCoords.height }px`
    }
  }

  useEffect(() => {
    if (tooltipRef.current) positionTooltip()
  })

  if (isHidden) return null
  return (
    <Styled ref={ tooltipRef } className={ className || '' } style={ style }>
      { children }
    </Styled>
  )
}

export default Tooltip
