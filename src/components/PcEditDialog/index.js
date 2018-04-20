import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

// components
import PcEditForm from '../PcEditForm'

// logic
import { setChangeValue } from '../../helpers/pcEdit'


class PcEditDialog extends Component {
  state = {
    open: false,
    editPcInfo: {},
    imageFiles: [],
  }

  handleDrop = (imageFiles) => {
    if (Object.keys(imageFiles).length > 0) {
      this.setState({
        imageFiles: imageFiles[0],
      })
    }
  }

  handleOpen = () => {
    const { editPcInfo } = this.props

    // PC情報をeditPcInfoに格納
    this.setState({
      open: true,
      editPcInfo: editPcInfo,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      imageFiles: [],
    })
  }

  handleSubmitEditPcInfo = async (e) => {
    e.preventDefault()
    const { onUpdatePcInfo, onUpdatePcInfoWithThumbnail } = this.props

    // PC情報保存
    if (Object.keys(this.state.imageFiles).length > 0) {
      await onUpdatePcInfoWithThumbnail(this.state.editPcInfo, this.state.imageFiles)
    } else {
      await onUpdatePcInfo(this.state.editPcInfo)
    }

    // editPcInfo初期化
    this.setState({
      open: false,
      editPcInfo: {},
      imageFiles: [],
    })
  }

  handleChangeValue = (e) => {
    e.preventDefault()
    setChangeValue(this, e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        <RaisedButton label="編集する" onClick={this.handleOpen} />
        <Dialog
          title="PC編集ダイアログ"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
          contentStyle={{ width: '80%', maxWidth: 'none' }}
        >
          <PcEditForm
            editPcInfo={this.state.editPcInfo}
            imageFiles={this.state.imageFiles}
            onClose={this.handleClose}
            onSubmit={this.handleSubmitEditPcInfo}
            onChangeValue={this.handleChangeValue}
            onDrop={this.handleDrop}
          />

        </Dialog>
      </div>
    )
  }
}

export default PcEditDialog
