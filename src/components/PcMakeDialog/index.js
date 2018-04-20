import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

// conponents
import PcEditForm from '../PcEditForm'

// logic
import { initializedEditPcInfo, setChangeValue } from '../../helpers/pcEdit'


class PcMakeDialog extends Component {
  state = {
    open: false,
    editPcInfo: {},
    imageFiles: [],
  }

  componentWillMount() {
    // editPcInfo初期化
    initializedEditPcInfo(this)
  }

  handleDrop = (imageFiles) => {
    if (Object.keys(imageFiles).length > 0) {
      this.setState({
        imageFiles: imageFiles[0],
      })
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    // editPcInfo初期化
    initializedEditPcInfo(this)

    this.setState({
      open: false,
      imageFiles: [],
    })
  }


  handleSubmitMakePcInfo = async (e) => {
    e.preventDefault()
    const { onUpdatePcInfo, onUpdatePcInfoWithThumbnail } = this.props

    // PC情報保存
    if (Object.keys(this.state.imageFiles).length > 0) {
      await onUpdatePcInfoWithThumbnail(this.state.editPcInfo, this.state.imageFiles)
    } else {
      await onUpdatePcInfo(this.state.editPcInfo)
    }

    // editPcInfo初期化
    initializedEditPcInfo(this)
    this.setState({
      open: false,
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
        <RaisedButton label="PCを作成する" onClick={this.handleOpen} />
        <Dialog
          title="PC作成ダイアログ"
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
            onSubmit={this.handleSubmitMakePcInfo}
            onChangeValue={this.handleChangeValue}
            onDrop={this.handleDrop}
          />
        </Dialog>
      </div>
    )
  }
}

export default PcMakeDialog
