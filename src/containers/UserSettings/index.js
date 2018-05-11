import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'

import { STATIC_ENDPOINT } from '../../config/config'

// logic
import { handlePostImage } from './logic'

// styles
import { UserSettingsDiv } from './styles'


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

  render() {
    const { handlePostImage, userName, thumbnail } = this.props
    const { imageFile, errorMessage } = this.state

    const preview = (Object.keys(imageFile).length > 0) ? (
      <div>
        プレビュー<br />
        <img
          alt='img'
          width='72'
          height='72'
          src={imageFile.preview}
        />

        <br /><br />

        <button
          type='submit'
          onClick={() => handlePostImage(imageFile)}
        >
          プロフィール画像を変更
        </button>
      </div>
    ) : null

    return (
      <UserSettingsDiv className='UserSettings'>
        <h2>UserSettings</h2>
        名前: {userName} <br />
        現在サムネイル:
        <img
          alt='img'
          width='32'
          height='32'
          src={STATIC_ENDPOINT + thumbnail}
        />
        <br />

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
            'border': '1px solid #e1e8ed',
            'backgroundColor': '#222426',
            'textAlign': 'center',
          }}
        >
          <div>Drop Zone (72x72) png/jpg/jpeg</div>
        </Dropzone>
        <br />

        {preview}

        {errorMessage}
      </UserSettingsDiv>
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
