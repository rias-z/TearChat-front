import React from 'react'
import { connect } from 'react-redux'

// containers
import SideBarForKp from '../SideBarForKp'
import SideBarForMember from '../SideBarForMember'
import OperationPcDisplay from '../OperationPcDisplay'
import OperationDiceDisplay from '../OperationDiceDisplay'

// styles
import { StyledDiv } from './styles'


const SideBarManager = (props) => {
  const { isKp, kpInfo, roomName } = props

  return (
    <StyledDiv>
      <h3>{roomName}</h3>

      <div>
        部屋情報<br />
        KP: {kpInfo.userName}<br />
      </div>

      <br />

      {(() => {
        if (isKp) {
          return <SideBarForKp />
        } else {
          return <SideBarForMember />
        }
      })()}

      <OperationPcDisplay />

      <OperationDiceDisplay />
    </StyledDiv>
  )
}

const mapStateToProps = (state) => ({
  isKp: state.Session.isKp,
  kpInfo: state.Session.kpInfo,
  roomName: state.Session.roomName,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarManager)
