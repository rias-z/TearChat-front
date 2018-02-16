import { connect } from 'react-redux'
import CreateRoom from '../../components/CreateRoom'

// dispatch
import { logout } from '../App/action'


const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoom)
