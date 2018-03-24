import React from 'react'
import { connect } from 'react-redux'
import { WrapPcView, StyledPcBox } from './styles'

// actions
import { addTable, removeTable } from '../Table/action'


const PcView = (props) => {
  const pcChannels = props.pcsInfo.map(pc => {
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
            props.removeTable('pc_' + pc._id)
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
    <WrapPcView>
      {pcChannels}
    </WrapPcView>
  )
}

const mapStateToProps = (state) => ({
  ids: state.Table.ids,
  pcsInfo: state.PcView.pcsInfo,
})

const mapDispatchToProps = (dispatch) => ({
  addTable: (id) => dispatch(addTable(id)),
  removeTable: (id) => dispatch(removeTable(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PcView)
