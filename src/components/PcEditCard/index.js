import React from 'react'

import { STATIC_ENDPOINT } from '../../config/config'


const PcEditCard = (props) => {
  const { pcInfo, onChangeStatus } = props

  return (
    <div className='ColumnPc'>
      <img
        alt='img'
        width='72'
        height='72'
        src={STATIC_ENDPOINT + pcInfo.thumbnail}
      />
      <br />
      名前:
      <input
        type='text'
        name='pcName'
        defaultValue={pcInfo.pcName}
        onChange={(e) => onChangeStatus('pcName', e.target.value)}
      />
      <br />
      年齢:
      <input
        type='text'
        name='age'
        defaultValue={pcInfo.age}
        onChange={(e) => onChangeStatus('age', e.target.value)}
      />
      <br />
      職業:
      <input
        type='text'
        name='job'
        defaultValue={pcInfo.job}
        onChange={(e) => onChangeStatus('job', e.target.value)}
      />

      <hr />
      Status:<br />
      HP:
      <input
        type='text'
        name='status_hp'
        defaultValue={pcInfo.status.hp}
        onChange={(e) => onChangeStatus('status_hp', e.target.value)}
      />
      <br />
      MP:
      <input
        type='text'
        name='status_mp'
        defaultValue={pcInfo.status.mp}
        onChange={(e) => onChangeStatus('status_mp', e.target.value)}
      />
      <br />
      SAN:
      <input
        type='text'
        name='status_san'
        defaultValue={pcInfo.status.san}
        onChange={(e) => onChangeStatus('status_san', e.target.value)}
      />
      <br />
    </div>
  )
}

export default PcEditCard
