import React from 'react'
import Dropzone from 'react-dropzone'
import FlatButton from 'material-ui/FlatButton'

// components
import StatusTable from '../StatusTable'
import SkillPointsTable from '../SkillPointsTable'
import SkillTable from '../SkillTable'


const PcMakeForm = (props) => {
  const { makePcInfo, imageFiles } = props
  const {
    onClose, onSubmit, onChangeValue, onDrop
  } = props

  const renderPersonalData = () => {
    const preview = (Object.keys(imageFiles).length > 0) ? (
      <div>
        <img
          alt='img'
          width='72'
          height='72'
          src={imageFiles.preview}
        />
      </div>
    ) : (
      <div>
        72x72
      </div>
    )

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

        名前*: <input type='text' name='personal_name' required onChange={onChangeValue} /><br />
        年齢: <input type='text' name='personal_age' onChange={onChangeValue} /><br />
        職業: <input type='text' name='personal_job' onChange={onChangeValue} /><br />
      </div>
    )
  }

  return (
    <div className='PcMakeForm'>
      <form onSubmit={onSubmit}>
        {renderPersonalData()}

        <StatusTable
          onChangeValue={onChangeValue}
          makePcInfo={makePcInfo}
        />
        <hr />

        <SkillPointsTable
          makePcInfo={makePcInfo}
        />
        <hr />

        <SkillTable
          onChangeValue={onChangeValue}
          makePcInfo={makePcInfo}
        /><hr />

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

export default PcMakeForm
