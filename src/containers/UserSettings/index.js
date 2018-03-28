import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dropzone from 'react-dropzone'

import { handlePostImage } from './logic'


class UserSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageFile: [],
      errorMessage: '',
    }
  }

  onDrop = (imageFiles) => {
    if (Object.keys(imageFiles).length > 0) {
      this.setState({
        imageFile: imageFiles[0],
      })
    } else {
      this.setState({
        errorMessage: 'file error!',
      })
    }
  }

  onPostImage = () => {
    this.props.handlePostImage(this.state.imageFile)
  }

  render() {
    const preview = (Object.keys(this.state.imageFile).length > 0) ? (
      <div>
        プレビュー<br />
        <img
          alt='img'
          width='72'
          height='72'
          src={this.state.imageFile.preview}
        />

        <br /><br />

        <button
          type='submit'
          onClick={this.onPostImage}
        >
          プロフィール画像を変更
        </button>
      </div>
    ) : null

    return (
      <div className='UserSettings'>
        <h3>ユーザ設定</h3>
        名前: {this.props.userName} <br />
        サムネイル:
        <img
          alt='img'
          width='32'
          height='32'
          src={this.props.thumbnail}
        />
        <br />

        新しいプロフィール画像をアップロードする<br />
        <Dropzone
          accept="image/jpg,image/jpeg,image/png"
          onDrop={this.onDrop}
          className='dropzone'
          activeClassName='active-dropzone'
          multiple={false}
          style={{
            'width': '10rem',
            'height': '6rem',
            'border': '1px solid black',
            'backgroundColor': '#eeeeee',
            'textAlign': 'center',
          }}
        >
          <div>Drop Zone (72x72) png/jpg/jpeg</div>
        </Dropzone>

        <br />

        {preview}

        {this.state.errorMessage}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.App.userName,
  thumbnail: state.App.thumbnail,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostImage: (image) => dispatch(handlePostImage(image)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings)
