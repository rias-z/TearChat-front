import React from 'react'
import Dropzone from 'react-dropzone'
import FlatButton from 'material-ui/FlatButton'

import { STATIC_ENDPOINT } from '../../config/config'

// components
import CurrentStatusTable from '../CurrentStatusTable'
import StatusTable from '../StatusTable'
import SkillPointsTable from '../SkillPointsTable'
import SkillTable from '../SkillTable'


const PcEditForm = (props) => {
  const { editPcInfo, imageFiles } = props
  const {
    onClose, onSubmit, onChangeValue, onDrop
  } = props

  const renderPersonalTable = () => {
    const thumbnail = (editPcInfo.thumbnail) ? (
      <img
        alt='img'
        width='72'
        height='72'
        src={STATIC_ENDPOINT + editPcInfo.thumbnail}
      />
    ) : (
      <div>72x72</div>
    )

    const preview = (Object.keys(imageFiles).length > 0) ? (
      <div>
        <img
          alt='img'
          width='72'
          height='72'
          src={imageFiles.preview}
        />
      </div>
    ) : thumbnail

    return (
      <div className='personal'>
        <h3>パーソナルデータ</h3>
        サムネイル:
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

        名前*:
        <input
          type='text'
          name='personal_name'
          onChange={onChangeValue}
          defaultValue={editPcInfo.personal.name}
          required
        /><br />
        年齢:
        <input
          type='text'
          name='personal_age'
          onChange={onChangeValue}
          defaultValue={editPcInfo.personal.age}
        /><br />
        職業:
        <input
          type='text'
          name='personal_job'
          onChange={onChangeValue}
          defaultValue={editPcInfo.personal.job}
        /><br />
      </div>

    )
  }

  return (
    <div className='PcEditForm'>
      <form onSubmit={onSubmit}>
        {renderPersonalTable()}

        <StatusTable
          editPcInfo={editPcInfo}
          onChangeValue={onChangeValue}
        />
        <hr />

        <CurrentStatusTable
          editPcInfo={editPcInfo}
          onChangeValue={onChangeValue}
        />

        <SkillPointsTable
          editPcInfo={editPcInfo}
          onChangeValue={onChangeValue}
        />
        <hr />

        <SkillTable
          editPcInfo={editPcInfo}
          onChangeValue={onChangeValue}
        />
        <hr />

        <FlatButton
          label="Cancel"
          primary
          onClick={onClose}
        />

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
