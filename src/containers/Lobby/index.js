import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Lobby from '../../components/Lobby'
import * as selectors from './selectors'

// dispatch
import { apiGetCompactRooms } from './api'


const mapStateToProps = createStructuredSelector ({
  isLoading: selectors.makeSelectIsLoading(),
  rooms: selectors.makeSelectRooms()
})

const mapDispatchToProps = (dispatch) => ({
  apiGetCompactRooms: (rooms) => dispatch(apiGetCompactRooms(rooms))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby)
