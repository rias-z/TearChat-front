import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as selectors from './selectors'

import App from '../../components/App'

// dispatch
import { apiTokenCheck } from './api'
import { logout } from './action'


const mapStateToProps = createStructuredSelector ({
  is_token_checked: selectors.makeSelectIsTokenChecked(),
  is_authenticated: selectors.makeSelectIsAuthenticated(),
  user_id: selectors.makeSelectUserId(),
  user_name: selectors.makeSelectUserName()
})

const mapDispatchToState = (dispatch) => ({
  apiTokenCheck: (sessionId) => dispatch(apiTokenCheck(sessionId)),
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(App)
