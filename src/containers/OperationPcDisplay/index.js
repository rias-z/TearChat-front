import React from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import styled from 'styled-components'

// containers
import PcDialog from '../PcDialog'

// action
import { setSelectFkPcId } from './action'


const StyledDiv = styled.div`
  margin: 0.2rem;
  padding: 0rem 1rem 1rem 1rem;
  background-color: #4e5965;
`


class OperationPcDisplay extends React.Component {
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
      <StyledDiv>
        <h3>PC操作</h3>

        {/* PC選択 */}
        <SelectField
          floatingLabelText='SelectPC'
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '8rem' }}
          labelStyle={{ color: 'white' }}
          floatingLabelStyle={{ color: 'white' }}
        >
          <MenuItem value={-1} primaryText="PC未選択" />
          <Divider />
          {menuItems}
        </SelectField>

        {/* PC追加 */}
        <PcDialog />
      </StyledDiv>
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
)(OperationPcDisplay)
