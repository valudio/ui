import React from 'react'
import { IBaseProps } from '../../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  isCurrent?: boolean
  onClick: (page: number) => void
}

const Page: React.FC<IProps> = ({ children, isHidden, className, onClick, isCurrent }) => {
  if (isHidden) return null
  const classNames = `${ className || '' } ${ isCurrent && 'current' }`
  return <Styled className={ classNames } onClick={ onClick.bind(undefined, children) }>{ children }</Styled>
}

export default Page
