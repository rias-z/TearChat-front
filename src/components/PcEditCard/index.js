import React from 'react'

import { STATIC_ENDPOINT } from '../../config/config'


const PcEditCard = (props) => {
  const { pcInfo, onChangeValue } = props

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
        name='personal_name'
        defaultValue={pcInfo.personal.name}
        onChange={onChangeValue}
      />
      <br />
      年齢:
      <input
        type='text'
        name='personal_age'
        defaultValue={pcInfo.personal.age}
        onChange={onChangeValue}
      />
      <br />
      職業:
      <input
        type='text'
        name='personal_job'
        defaultValue={pcInfo.personal.job}
        onChange={onChangeValue}
      />

      <hr />
      Status:<br />
      HP:
      <input
        type='text'
        name='status_hp'
        defaultValue={pcInfo.status.hp.totalPoint}
        onChange={onChangeValue}
      />
      <br />
      MP:
      <input
        type='text'
        name='status_mp'
        defaultValue={pcInfo.status.mp.totalPoint}
        onChange={onChangeValue}
      />
      <br />
      SAN:
      <input
        type='text'
        name='status_san'
        defaultValue={pcInfo.status.san.totalPoint}
        onChange={onChangeValue}
      />
      <br />
    </div>
  )
}

export default PcEditCard
