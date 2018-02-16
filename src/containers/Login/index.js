import { connect } from 'react-redux'
import Login from '../../components/Login'

// dispatch
import { apiLoginRequest } from './api'


const mapStateToProps = (state) => ({
  is_authenticated: state.App.is_authenticated
})

const mapDispatchToProps = (dispatch) => ({
  apiLoginRequest: (user_name, password) => dispatch(apiLoginRequest(user_name, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
