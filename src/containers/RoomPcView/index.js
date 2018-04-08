import React from 'react'
import { connect } from 'react-redux'
import { WrapRoomPcView, StyledPcBox } from './styles'

// actions
import { addTable, removeTable } from '../Table/action'

import { STATIC_ENDPOINT } from '../../config/config'


const RoomPcView = (props) => {
  const pcChannels = props.roomPcInfo.map(pc => {
    const channel = 'pc_' + pc._id

    // idsチェック
    if (props.ids.indexOf(channel) === -1) {
      // idsにない場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            props.addTable('pc_' + pc._id)
          }}
        >
          [x]<br />
          <img
            alt='img'
            width='48'
            height='48'
            src={STATIC_ENDPOINT + pc.thumbnail}
          />
          <br />
          名前: {pc.pcName}<br />
          年齢: {pc.age}<br />
          職業: {pc.job}<br />
          User: {pc.userName}
        </StyledPcBox>
      )
    } else {
      // idsにある場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            props.removeTable('pc_' + pc._id)
          }}
        >
          [=]<br />
          <img
            alt='img'
            width='48'
            height='48'
            src={STATIC_ENDPOINT + pc.thumbnail}
          />
          <br />
          名前: {pc.pcName}<br />
          年齢: {pc.age}<br />
          職業: {pc.job}<br />
          User: {pc.userName}
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
  ids: state.Table.ids,
  roomPcInfo: state.RoomPcView.roomPcInfo,
})

const mapDispatchToProps = (dispatch) => ({
  addTable: (id) => dispatch(addTable(id)),
  removeTable: (id) => dispatch(removeTable(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomPcView)
