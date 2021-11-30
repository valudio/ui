import React from 'react'
import { durationInMinutes } from '../../../helpers'
import StyledDiv from './styles'
import { IEvent } from '../../../models'

interface IProps {
  id: string
  events: IEvent<any>[]
  onCreate: () => void
  onOpenEvent: (event: IEvent<any>) => void
}

export const HourCell: React.FC<IProps> = ({ id, events, onCreate, onOpenEvent }) => {
  const eventPills = events.map((event, i) => {
    const duration = durationInMinutes(event.date)
    const height = `${ duration - 1 }px`
    return (
      <div
        key={ `${ event.date.fromHour }-${ i }` }
        className="event-pill"
        style={{
          minHeight: height,
          zIndex: i + 1,
          backgroundColor: `${ event.data.unitColor || '' }`
        }}
        onClick={ () => onOpenEvent(event) }
      >
        <h6>
          { id }
          {/* {
            event.data.type === AppointmentType.Event
              ? `${ event.data.event.title } ${ event.data.event.type }`
              : event.data.therapyName
          } */}
        </h6>
        <span>{ event.date.fromHour } - { event.date.toHour }</span>
      </div>
    )
  })

  return (
    <StyledDiv id={ id } className="hour-divider" >
      { eventPills }
      <div className="create-pill" onClick={ onCreate }>
        <span>+</span>
      </div>
    </StyledDiv>
  )
}
