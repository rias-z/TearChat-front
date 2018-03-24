import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import PcDisplay from '../../components/PcDisplay'


const ColumnPc = (props) => {
  const { onClose, pcId } = props

  const pcIdx = props.pcsInfo.findIndex(pc => pc._id === pcId)
  const pcInfo = props.pcsInfo[pcIdx]

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
  pcsInfo: state.PcView.pcsInfo,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPc)
