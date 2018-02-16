import { connect } from 'react-redux'
import Lobby from '../../components/Lobby'

// dispatch
import { apiGetCompactRooms } from './api'


const mapStateToProps = (state) => ({
  isLoading: state.Lobby.isLoading,
  rooms: state.Lobby.rooms
})

const mapDispatchToProps = (dispatch) => ({
  apiGetCompactRooms: (rooms) => dispatch(apiGetCompactRooms(rooms))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby)
