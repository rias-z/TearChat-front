import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as selectors from './selectors'
import Login from '../../components/Login'

// dispatch
import { apiLoginRequest } from './api'


const mapStateToProps = createStructuredSelector ({
  is_authenticated: selectors.makeSelectIsAuthenticated()
})

const mapDispatchToProps = (dispatch) => ({
  apiLoginRequest: (user_name, password) => dispatch(apiLoginRequest(user_name, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
