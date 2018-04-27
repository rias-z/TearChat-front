import React from 'react'
import { connect } from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

// action
import { setSelectFkPcId } from './action'


class OperationPc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: -1,
    }
  }

  handleChange = (e, index, value) => {
    this.props.setSelectFkPcId(value)

    this.setState({
      value: value
    })
  }

  render() {
    const menuItems = this.props.selfRoomPcInfo.map(selfRoomPcInfo => {
      return (
        <MenuItem
          key={selfRoomPcInfo.fkPcId}
          value={selfRoomPcInfo.fkPcId}
          primaryText={selfRoomPcInfo.pcInfo.personal.name}
        />
      )
    })

    return (
      <div>
        <h3>OperationPc</h3>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={-1} primaryText="PC未選択" />
          <Divider />
          {menuItems}
        </DropDownMenu>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selfRoomPcInfo: state.RoomPcView.selfRoomPcInfo,
})

const mapDispatchToProps = (dispatch) => ({
  setSelectFkPcId: (fkPcId) => dispatch(setSelectFkPcId(fkPcId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationPc)
