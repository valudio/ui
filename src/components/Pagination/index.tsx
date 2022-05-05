import React, { PropsWithChildren } from 'react'
import { IBaseProps } from '../../models'
import Icon from '../Icon'
import Page from './Page'
import Styled from './styles'

interface IProps extends IBaseProps {
  totalPages: number
  currentPage: number
  onClick: (page: number) => void
}

const Pagination: React.FC<PropsWithChildren<IProps>> = ({
  className, isHidden, style, totalPages, currentPage, onClick
}) => {
  if (isHidden) return null
  return (
    <Styled className={ `${ className || '' }` } style={ style }>
      <Icon
        className={ `arrow ${ currentPage === 1 ? 'disabled' : '' }` }
        icon="left"
        onClick={ onClick.bind(undefined, currentPage - 1) }
      />
      <Page isHidden={ currentPage < 5 } onClick={ onClick }>{ 1 }</Page>
      { currentPage >= 5 && '...' }
      <Page isHidden={ currentPage - 2 <= 0 } onClick={ onClick }>{ currentPage - 2 }</Page>
      <Page isHidden={ currentPage - 1 <= 0 } onClick={ onClick }>{ currentPage - 1 }</Page>
      <Page onClick={ onClick } isCurrent>{ currentPage }</Page>
      <Page isHidden={ currentPage + 1 > totalPages } onClick={ onClick }>{ currentPage + 1 }</Page>
      <Page isHidden={ currentPage + 2 > totalPages } onClick={ onClick }>{ currentPage + 2 }</Page>
      { totalPages - currentPage >= 5 && '...' }
      <Page isHidden={ totalPages - currentPage < 5 } onClick={ onClick }>{ totalPages }</Page>
      <Icon
        className={ `arrow ${ currentPage === totalPages ? 'disabled' : '' }` }
        icon="right"
        onClick={ onClick.bind(undefined, currentPage + 1) }
      />
    </Styled>
  )
}

export default Pagination
