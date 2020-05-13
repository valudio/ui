import React, { RefObject, useEffect, useRef } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  triggerRef: RefObject<HTMLElement>
}

const Tooltip: React.FC<IProps> = ({ children, isHidden, className, style, triggerRef }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const isTooltipInViewport = () => {
    const parentCoords = triggerRef.current.getBoundingClientRect()
    const tooltipCoords = tooltipRef.current.getBoundingClientRect()
    const isTooltipTopVisible = tooltipCoords.top >= 0
    const isTooltipLeftVisible = tooltipCoords.left >= 0
    const isTooltipRightVisible =
      (parentCoords.right + tooltipCoords.width) <= (window.innerWidth || document.documentElement.clientWidth)
    const isTooltipBottomVisible =
      (parentCoords.bottom + tooltipCoords.height) <= (window.innerHeight || document.documentElement.clientHeight)

    return isTooltipTopVisible || isTooltipLeftVisible || isTooltipRightVisible || isTooltipBottomVisible
  }

  const positionTooltip = () => {
    const parentCoords = triggerRef.current.getBoundingClientRect()

    if (isTooltipInViewport()) {
      tooltipRef.current.style.top = `${ parentCoords.top + parentCoords.height }px`
      tooltipRef.current.style.left = `${ parentCoords.left }px`
      tooltipRef.current.style.visibility = 'visible'
    } else {
      tooltipRef.current.style.bottom = `${ parentCoords.top + parentCoords.height }px`
      tooltipRef.current.style.right = '0'
      tooltipRef.current.style.visibility = 'visible'
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
