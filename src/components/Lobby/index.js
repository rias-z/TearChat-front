import React, {Component} from 'react'


class Lobby extends Component {
  onClick(e) {
    e.preventDefault()
    this.props.history.push('/create_room')
  }

  render() {
    return (
      <div className='Lobby'>
        <h2>Lobby</h2>

        <h3>部屋一覧</h3>
        <h3>部屋を作成する</h3>
        <input type='button' onClick={this.onClick.bind(this)} value='部屋を作成する' />
      </div>
    )
  }
}

export default Lobby
