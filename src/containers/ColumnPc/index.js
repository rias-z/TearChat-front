import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import PcCard from '../../components/PcCard'
import PcEditCard from '../../components/PcEditCard'

// logic
import {
  handleUpdatePcInfo,
  handleUpdatePcInfoWithThumbnail,
  setChangeValue,
} from './logic'


class ColumnPc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdit: false,
      editPcInfo: {},
    }
  }

  render() {
    const { fkPcId, roomPcInfo } = this.props
    const {
      onClose,
      handleUpdatePcInfo,
      handleUpdatePcInfoWithThumbnail
    } = this.props

    // 静的に表示するPC情報
    const pcIdx = roomPcInfo.findIndex(pc => pc._id === fkPcId)
    const pcInfo = roomPcInfo[pcIdx]

    const handleEdit = () => {
      // 現在のPC情報をセット
      this.setState({
        isEdit: true,
        editPcInfo: pcInfo,
      })
    }

    // const handleCloseEdit = () => {
    //   this.setState({
    //     isEdit: false,
    //     editPcInfo: {},
    //   })
    // }

    // const onUpdatePcInfo = () => {
    //   // PC情報をsocketで更新
    //   this.props.handleUpdatePcInfo(this.state.editPcInfo)

    //   this.setState({
    //     isEdit: false,
    //     editPcInfo: {},
    //   })
    // }

    // const handleChangeValue = (e) => {
    //   e.preventDefault()

    //   setChangeValue(this, e.target.name, e.target.value)
    // }

    if (!this.state.isEdit) {
      return (
        <ColumnRoot>
          <ColumnHeader
            onClose={onClose}
            onEdit={handleEdit}
            name="PC"
            isEdit={this.state.isEdit}
          />
          <ColumnBody>
            <PcCard
              pcInfo={pcInfo}
              onUpdatePcInfo={handleUpdatePcInfo}
              onUpdatePcInfoWithThumbnail={handleUpdatePcInfoWithThumbnail}
            />
          </ColumnBody>
        </ColumnRoot>
      )
    } else {
      // PC EDITモード
      return (
        <ColumnRoot>
          {/* <ColumnHeader
            onClose={onClose}
            onEdit={handleCloseEdit}
            name="PC"
            isEdit={this.state.isEdit}
            onUpdatePcInfo={onUpdatePcInfo}
          />
          <ColumnBody>
            <PcEditCard
              pcInfo={this.state.editPcInfo}
              onChangeValue={handleChangeValue}
            />
          </ColumnBody> */}
        </ColumnRoot>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  roomPcInfo: state.RoomPcView.roomPcInfo,
  socket: state.Session.socket,
})

const mapDispatchToProps = (dispatch) => ({
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
  handleUpdatePcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handleUpdatePcInfoWithThumbnail(pcInfo, imageFile))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPc)
