import React from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

// api
import { apiGetPcList } from './api'
import { addPcToView } from '../PcView/logic'


class PcDialog extends React.Component {
  state = {
    open: false,
    pcList: [],
    pcInfo: [],
  };

  handleOpen = async () => {
    const result = await apiGetPcList()

    this.setState({
      open: true,
      pcList: result,
    })
  }

  handleClose = () => {
    // 選択したPCをPcViewに追加する
    this.props.addPcToView(this.state.pcInfo)

    this.setState({ open: false })
  }

  handleSetPcInfo = (pcInfo) => {
    this.setState({
      pcInfo: pcInfo,
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
        keyboardFocused
        onClick={this.handleClose}
      />,
    ]

    const radios = this.state.pcList.map(pc => {
      return (
        <RadioButton
          key={pc._id}
          value={`value${pc._id}`}
          label={`${pc.pcName}`}
          name='select'
          onClick={() => this.handleSetPcInfo(pc)}
        />
      )
    })

    return (
      <div>
        <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Scrollable Dialog"
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

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  addPcToView: (pcInfo) => dispatch(addPcToView(pcInfo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PcDialog)
