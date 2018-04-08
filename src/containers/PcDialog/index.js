import React from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

// api
import { apiGetPcList } from './api'

// logic
import { handleAddRoomPcInfo } from './logic'


class PcDialog extends React.Component {
  state = {
    open: false,
    selected: false,
    selfPcList: [],
    selectPcInfo: [],
  }

  // Dialogを展開時，ユーザが作成したPCリストを取得する
  handleOpen = async () => {
    const selfPcList = await apiGetPcList()

    this.setState({
      open: true,
      selfPcList: selfPcList,
    })
  }

  // disalogを閉じる
  handleClose = () => {
    this.setState({
      open: false,
      selected: false,
      selectPcInfo: [],
    })
  }

  // submitボタン押下時
  handleSubmit = () => {
    // 選択したPCの_idをRoomPcInfoに追加する
    this.props.handleAddRoomPcInfo(this.state.selectPcInfo._id)

    // disalogを閉じる
    this.setState({
      open: false,
      selected: false,
      selectPcInfo: [],
    })
  }

  // PC選択時
  handleSetPcInfo = (pcInfo) => {
    this.setState({
      selected: true,
      selectPcInfo: pcInfo,
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        disabled={!this.state.selected}
        keyboardFocused
        onClick={this.handleSubmit}
      />,
    ]

    const radios = this.state.selfPcList.map(pc => {
      // RoomPCとして登録されているかどうか
      const isJoinedRoomPc = this.props.roomPcInfo.findIndex(roomPc => roomPc.fkPcId === pc._id) > 0

      if (!isJoinedRoomPc) {
        return (
          <RadioButton
            key={pc._id}
            value={`value${pc._id}`}
            label={`${pc.pcName}`}
            name='select'
            onClick={() => this.handleSetPcInfo(pc)}
          />
        )
      } else {
        return (
          <RadioButton
            key={pc._id}
            value={`value${pc._id}`}
            label={`${pc.pcName}`}
            name='select'
            disabled
            onClick={() => this.handleSetPcInfo(pc)}
          />
        )
      }
    })

    return (
      <div>
        <RaisedButton label="PCを選択して追加" onClick={this.handleOpen} />
        <Dialog
          title="PCを選択して追加"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  roomPcInfo: state.RoomPcView.roomPcInfo,
})

const mapDispatchToProps = (dispatch) => ({
  // addPcToView: (pcInfo) => dispatch(addPcToView(pcInfo)),
  handleAddRoomPcInfo: (fkPcId) => dispatch(handleAddRoomPcInfo(fkPcId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PcDialog)
