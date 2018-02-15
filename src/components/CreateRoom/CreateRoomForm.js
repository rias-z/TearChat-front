import React, { Component } from 'react'

// api
import { apiCreateRoom } from '../../containers/CreateRoom/api'


class CreateRoomForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errorMessage: null
    }
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault()

    // フォームから取得
    const room_name = e.target.room_name.value
    const participants_number = e.target.participants_number.value

    const room_obj = {
      room_name: room_name,
      participants_number: participants_number
    }

    const result = await apiCreateRoom(room_obj)

    // Room作成成功時，ユーザはSession画面に遷移
    // 一時的にLobbyに遷移するようにmock
    if (result) {
      this.props.history.push("/")
    } else {
      // TODO エラー内容をユーザにわかりやすく表示できるようにする
      this.setState({
        errorMessage: "error"
      })
    }
  }

  render() {
    return (
      <div className='CreateRoomForm'>
        <h3>CreateRoomForm</h3>

        <form onSubmit={this.handleLoginSubmit.bind(this)}>
          部屋の名前: <input name='room_name' type='text' defaultValue='テストルーム1'/><br />
          参加人数: <input name='participants_number' type='text' defaultValue='4'/><br />
          <input type='submit' value='create_room'/>
        </form>

        {this.state.errorMessage}
      </div>
    )
  }
}

export default CreateRoomForm
