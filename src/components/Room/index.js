import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import { FlexDiv, RoomInfoDiv, ParticipateButtonDiv } from './styles'


const Room = (props) => {
  const {
    roomName, roomId, capacity, kpName
  } = props
  const { onClick } = props

  return (
    <div className='Room'>
      <FlexDiv>
        <RoomInfoDiv>
          <strong>{roomName}</strong>
          <ul>
            <li>KP: {kpName}</li>
            <li>参加人数: {capacity}</li>
            <li>id: {roomId}</li>
          </ul>
        </RoomInfoDiv>
        <ParticipateButtonDiv>
          <RaisedButton
            label="参加する"
            onClick={onClick}
            style={{
              margin: '2.8rem 0.7rem'
            }}
          />
        </ParticipateButtonDiv>
      </FlexDiv>
    </div>
  )
}

export default Room
