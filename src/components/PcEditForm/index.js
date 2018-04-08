import React from 'react'
import Dropzone from 'react-dropzone'
import FlatButton from 'material-ui/FlatButton'

import { STATIC_ENDPOINT } from '../../config/config'


const PcEditForm = (props) => {
  const {
    pcInfo, imageFile, onDrop, handleClose, handleSubmit
  } = props

  const preview = (Object.keys(imageFile).length > 0) ? (
    <div>
      <img
        alt='img'
        width='72'
        height='72'
        src={imageFile.preview}
      />
    </div>
  ) : (
    <img
      alt='img'
      width='72'
      height='72'
      src={STATIC_ENDPOINT + pcInfo.thumbnail}
    />
  )

  return (
    <div key={pcInfo._id}>
      <form onSubmit={handleSubmit}>
        名前: <input type='text' name='pcName' defaultValue={pcInfo.pcName} />
        <br />

        サムネイル:<br />
        <Dropzone
          accept="image/jpg,image/jpeg,image/png"
          onDrop={onDrop}
          className='dropzone'
          activeClassName='active-dropzone'
          multiple={false}
          style={{
            'width': '72px',
            'height': '72px',
            'border': '1px solid black',
            'backgroundColor': '#eeeeee',
          }}
        >
          {preview}
        </Dropzone>
        <br />

        年齢: <input type='text' name='age' defaultValue={pcInfo.age} />
        <br />

        職業: <input type='text' name='job' defaultValue={pcInfo.job} />
        <br />
        <hr />

        <FlatButton
          label="Cancel"
          primary
          onClick={handleClose}
        />
        {/* TODO 変更がない場合はsubmitボタンを押せないようにする */}
        <FlatButton
          type='submit'
          label="Submit"
          primary
          keyboardFocused
        />
      </form>
    </div>
  )
}

export default PcEditForm
