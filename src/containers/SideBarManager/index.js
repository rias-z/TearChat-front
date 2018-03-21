import React from 'react'
import { connect } from 'react-redux'

// containers
import SideBarForKp from '../SideBarForKp'
import SideBarForMember from '../SideBarForMember'


const SideBarManager = (props) => {
  if (props.isKp) {
    return <SideBarForKp />
  } else {
    return <SideBarForMember />
  }
}

const mapStateToProps = (state) => ({
  isKp: state.Session.isKp,
})

const mapDispatchToProps = () => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarManager)
