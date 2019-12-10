import React from 'react'
import Styled from './styles'

const Spinner: React.FC = () => {
  return (
    <Styled>
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </Styled>
  )
}

export default Spinner
