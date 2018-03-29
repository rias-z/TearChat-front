import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import PcDisplay from '../../components/PcDisplay'


const ColumnPc = (props) => {
  const { onClose, pcId } = props

  const pcIdx = props.roomPcInfo.findIndex(pc => pc.fkPcId === pcId)
  const pcInfo = props.roomPcInfo[pcIdx]

  return (
    <ColumnRoot>
      <ColumnHeader
        name="PC"
        onClose={onClose}
      />

      <ColumnBody>
        <PcDisplay pcInfo={pcInfo} />
      </ColumnBody>
    </ColumnRoot>
  )
}

const mapStateToProps = (state) => ({
  roomPcInfo: state.RoomPcView.roomPcInfo,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPc)
