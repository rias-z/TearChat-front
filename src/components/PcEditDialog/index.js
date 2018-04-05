import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

// components
import PcEditForm from '../PcEditForm'


class PcEditDialog extends Component {
  state = {
    open: false,
    imageFile: [],
  }

  onDrop = (imageFile) => {
    if (Object.keys(imageFile).length > 0) {
      this.setState({
        imageFile: imageFile[0],
      })
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      imageFile: [],
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO 情報漏れがないかチェック

    // API PC情報を保存する
    const _pcInfo = {
      _id: this.props.pcInfo._id,
      pcName: e.target.pcName.value,
      age: e.target.age.value,
      job: e.target.job.value,
    }
    const _imageFile = this.state.imageFile

    if (Object.keys(_imageFile).length > 0) {
      // 画像変更あり
      this.props.onUpdatePcInfoWithThumbnail(_pcInfo, _imageFile)
    } else {
      // 画像変更なし
      this.props.onUpdatePcInfo(_pcInfo)
    }

    // dialogを閉じる
    this.setState({
      open: false,
      imageFile: [],
    })
  }

  render() {
    return (
      <div>
        <RaisedButton label="編集する" onClick={this.handleOpen} />
        <Dialog
          title="PC編集画面"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          <PcEditForm
            pcInfo={this.props.pcInfo}
            imageFile={this.state.imageFile}
            onDrop={this.onDrop}
            handleClose={this.handleClose}
            handleSubmit={this.handleSubmit}
          />
        </Dialog>
      </div>
    )
  }
}

export default PcEditDialog
