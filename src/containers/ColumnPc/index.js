import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import PcCard from '../../components/PcCard'
import PcEditCard from '../../components/PcEditCard'

// actions
import { setEditPcColumn } from './action'

// logic
import { handleUpdatePcInfo } from './logic'


class ColumnPc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editPcInfo: {},
    }
  }

  render() {
    const { onClose, pcId, roomPcInfo } = this.props

    // 静的に表示するPC情報
    const pcIdx = roomPcInfo.findIndex(pc => pc.fkPcId === pcId)
    const pcInfo = roomPcInfo[pcIdx]

    const handleEdit = () => {
      // 現在のPC情報をセット
      this.setState({
        editPcInfo: pcInfo,
      })

      this.props.setEditPcColumn(true)
    }

    const handleCloseEdit = () => {
      this.props.setEditPcColumn(false)
    }

    const onUpdatePcInfo = () => {
      this.props.handleUpdatePcInfo(this.state.editPcInfo)
    }

    // const handleUpdatePcInfo = () => {
    //   console.log('handleUpdatePcInfo')
    //   console.log(this.state.editPcInfo)

    //   // socketでPC情報更新
    //   socket.updatePcInfo(this.state.editPcInfo)

    //   // 成功した場合全員にPC情報の更新をブロードキャスト

    //   // isEditをfalseにする
    // }

    const handleChangeStatus = (key, value) => {
      // status = ['status', 'hp'] に分離
      const statusKey = key.split('_')

      if (statusKey[0] !== 'status') {
        // ステータス以外の変更
        this.setState({
          editPcInfo: {
            ...this.state.editPcInfo,
            [key]: value,
          }
        })
      } else {
        // ステータスの変更
        // TODO valueのnumチェック
        this.setState({
          editPcInfo: {
            ...this.state.editPcInfo,
            status: {
              ...this.state.editPcInfo.status,
              [statusKey[1]]: Number(value),
            }
          }
        })
      }
    }

    if (!this.props.isEdit) {
      return (
        <ColumnRoot>
          <ColumnHeader
            onClose={onClose}
            onEdit={handleEdit}
            name="PC"
            isEdit={this.props.isEdit}
          />
          <ColumnBody>
            <PcCard pcInfo={pcInfo} />
          </ColumnBody>
        </ColumnRoot>
      )
    } else {
      // PC EDITモード
      return (
        <ColumnRoot>
          <ColumnHeader
            onClose={onClose}
            onEdit={handleCloseEdit}
            name="PC"
            isEdit={this.props.isEdit}
            onUpdatePcInfo={() => this.props.handleUpdatePcInfo(this.state.editPcInfo)}
          />
          <ColumnBody>
            <PcEditCard
              pcInfo={this.state.editPcInfo}
              onChangeStatus={handleChangeStatus}
            />
          </ColumnBody>
        </ColumnRoot>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isEdit: state.ColumnPc.isEdit,
  roomPcInfo: state.RoomPcView.roomPcInfo,
  socket: state.Session.socket,
})

const mapDispatchToProps = (dispatch) => ({
  setEditPcColumn: (isEdit) => dispatch(setEditPcColumn(isEdit)),
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPc)
