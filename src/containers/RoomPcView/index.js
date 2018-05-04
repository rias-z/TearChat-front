import React from 'react'
import { connect } from 'react-redux'
import { WrapRoomPcView, StyledPcBox } from './styles'

import { STATIC_ENDPOINT } from '../../config/config'

// actions
import { addTable, removeTable } from '../Table/action'


const RoomPcView = (props) => {
  const { addTable, removeTable } = props
  const { ids, roomPcInfo } = props

  const pcChannels = roomPcInfo.map(pc => {
    const channel = 'pc_' + pc._id

    // idsチェック
    if (ids.indexOf(channel) === -1) {
      // idsにない場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            addTable('pc_' + pc._id)
          }}
        >
          [x]<br />
          <img
            alt='img'
            width='72'
            height='72'
            src={STATIC_ENDPOINT + pc.thumbnail}
          />
          <br />
          名前: {pc.personal.name}<br />
          Player: {pc.fkUserId.userName}
        </StyledPcBox>
      )
    } else {
      // idsにある場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            removeTable('pc_' + pc._id)
          }}
        >
          [=]<br />
          <img
            alt='img'
            width='72'
            height='72'
            src={STATIC_ENDPOINT + pc.thumbnail}
          />
          <br />
          名前: {pc.personal.name}<br />
          Player: {pc.fkUserId.userName}
        </StyledPcBox>
      )
    }
  })

  return (
    <WrapRoomPcView>
      {pcChannels}
    </WrapRoomPcView>
  )
}

const mapStateToProps = (state) => ({
  roomPcInfo: state.RoomPcView.roomPcInfo,
  ids: state.Table.ids,
})

const mapDispatchToProps = (dispatch) => ({
  addTable: (id) => dispatch(addTable(id)),
  removeTable: (id) => dispatch(removeTable(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomPcView)
