import React, { PropsWithChildren, RefObject, useEffect, useRef } from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  triggerRef: RefObject<HTMLElement>
}

const Tooltip: React.FC<PropsWithChildren<IProps>> = ({ children, isHidden, className, style, triggerRef }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const positionTooltip = () => {
    if (!triggerRef.current || !tooltipRef.current) return

    const parentCoords = triggerRef.current.getBoundingClientRect()
    const tooltipCoords = tooltipRef.current.getBoundingClientRect()
    const isTooltipBottomVisible =
      (parentCoords.bottom + tooltipCoords.height) <= (window.innerHeight || document.documentElement.clientHeight)
    const isTooltipRightVisible =
      (parentCoords.right + tooltipCoords.width / 2) <= (window.innerWidth || document.documentElement.clientWidth)

    if (!isTooltipBottomVisible && !isTooltipRightVisible) {
      tooltipRef.current.style.top = `${ parentCoords.top - tooltipCoords.height }px`
      tooltipRef.current.style.right = '0'
      tooltipRef.current.style.left = 'initial'
    } else if (!isTooltipBottomVisible && isTooltipRightVisible) {
      tooltipRef.current.style.top = `${ parentCoords.top - parentCoords.height }px`
      tooltipRef.current.style.left = `${ parentCoords.left }px`
    } else if (isTooltipBottomVisible && !isTooltipRightVisible) {
      tooltipRef.current.style.top = `${ parentCoords.top + parentCoords.height }px`
      tooltipRef.current.style.right = '0'
      tooltipRef.current.style.left = 'initial'
    } else {
      tooltipRef.current.style.top = `${ parentCoords.top + parentCoords.height }px`
      tooltipRef.current.style.left = `${ parentCoords.left }px`
    }

    tooltipRef.current.style.visibility = 'visible'
    tooltipRef.current.style.opacity = '1'
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
