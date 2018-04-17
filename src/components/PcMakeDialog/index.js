import React, { Component } from 'react'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

// conponents
import PcMakeForm from '../PcMakeForm'

// logic
import { initializedTableState, setChangeValue } from './logic'


class PcMakeDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      makePcInfo: {},
      imageFiles: [],
    }
  }

  componentWillMount() {
    // makePcInfo初期化
    initializedTableState(this)
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
    // makePcInfo初期化
    initializedTableState(this)

    this.setState({
      open: false,
      imageFiles: [],
    })
  }


  handleSubmitMakePc = async (e) => {
    e.preventDefault()
    const { onMakePc, onMakePcWithThumbnail } = this.props

    // PC情報保存
    if (Object.keys(this.state.imageFiles).length > 0) {
      await onMakePcWithThumbnail(this.state.makePcInfo, this.state.imageFiles)
    } else {
      await onMakePc(this.state.makePcInfo)
    }

    // makePcInfo初期化
    initializedTableState(this)
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
          <PcMakeForm
            makePcInfo={this.state.makePcInfo}
            imageFiles={this.state.imageFiles}
            onClose={this.handleClose}
            onSubmit={this.handleSubmitMakePc}
            onChangeValue={this.handleChangeValue}
            onDrop={this.handleDrop}
          />
        </Dialog>
      </div>
    )
  }
}

export default PcMakeDialog
