import React from 'react'
import { connect } from 'react-redux'
import { WrapRoomPcView, StyledPcBox } from './styles'

// actions
import { addTable, removeTable } from '../Table/action'


const RoomPcView = (props) => {
  const pcChannels = props.roomPcInfo.map(pc => {
    const channel = 'pc_' + pc.fkPcId

    // idsチェック
    if (props.ids.indexOf(channel) === -1) {
      // idsにない場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            props.addTable('pc_' + pc.fkPcId)
          }}
        >
          [x]<br />
          name: {pc.pcName}<br />
          age: {pc.age}<br />
          job: {pc.job}<br />
          userName: {pc.userName}
        </StyledPcBox>
      )
    } else {
      // idsにある場合
      return (
        <StyledPcBox
          key={pc._id}
          onClick={(e) => {
            e.preventDefault()
            props.removeTable('pc_' + pc.fkPcId)
          }}
        >
          [=]<br />
          name: {pc.pcName}<br />
          age: {pc.age}<br />
          job: {pc.job}<br />
          userName: {pc.userName}
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
