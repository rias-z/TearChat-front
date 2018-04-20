import React from 'react'

import { STATIC_ENDPOINT } from '../../config/config'


const PcCard = (props) => {
  const { pcInfo } = props

  return (
    <div className='ColumnPc'>
      <img
        alt='img'
        width='72'
        height='72'
        src={STATIC_ENDPOINT + pcInfo.thumbnail}
      />
      <br />
      名前: {pcInfo.personal.name}<br />
      年齢: {pcInfo.personal.age}<br />
      職業: {pcInfo.personal.job}<br />

      <hr />
      Status:<br />
      HP:{pcInfo.status.hp.totalPoint}<br />
      MP:{pcInfo.status.mp.totalPoint}<br />
      SAN:{pcInfo.status.san.totalPoint}<br />
    </div>
  )
}

export default PcCard
