import React from 'react'
import { connect } from 'react-redux'


class Admin extends React.Component {
  state = {
    isAdmin: false,
  }

  render() {
    return (
      <div>
        <h2>管理者画面</h2>
        {String(this.state.isAdmin)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin)
