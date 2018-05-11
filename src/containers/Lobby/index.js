import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

// containers
import RoomList from '../RoomList'

// styles
import { LobbyDiv, FlexDiv, WrapDiv } from './styles'


const Lobby = (props) => (
  <LobbyDiv className='Lobby'>
    <h2>Lobby</h2>

    <FlexDiv>
      <WrapDiv>
        <h3>ユーザ設定</h3>
        <RaisedButton
          label='ユーザ設定'
          onClick={() => {
            props.history.push('/settings')
          }}
          style={{
            margin: '0 0 0 1rem'
          }}
        />
      </WrapDiv>

      <WrapDiv>
        <h3>PCを作成/編集する</h3>
        <RaisedButton
          label='PCを作成/編集する'
          onClick={() => {
            props.history.push('/manager_pc')
          }}
          style={{
            margin: '0 0 0 1rem'
          }}
        />
      </WrapDiv>
    </FlexDiv>

    <FlexDiv>
      <WrapDiv>
        <h3>部屋を作成する</h3>
        <RaisedButton
          label='部屋を作成する'
          onClick={() => {
            props.history.push('/create_room')
          }}
          style={{
            margin: '0 0 0 1rem'
          }}
        />
      </WrapDiv>
    </FlexDiv>

    <h3>部屋一覧</h3>
    <RoomList
      {...props}
    />
  </LobbyDiv>
)

export default Lobby
