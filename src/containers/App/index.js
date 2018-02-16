import { connect } from 'react-redux'
import App from '../../components/App'

// dispatch
import { apiTokenCheck } from './api'
import { logout } from './action'


const mapStateToProps = (state) => ({
  is_token_checked: state.App.is_token_checked,
  is_authenticated: state.App.is_authenticated,
  user_id: state.App.user_id,
  user_name: state.App.user_name
})

const mapDispatchToState = (dispatch) => ({
  apiTokenCheck: (sessionId) => dispatch(apiTokenCheck(sessionId)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(App)
