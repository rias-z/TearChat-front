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
      名前: {pcInfo.pcName}<br />
      年齢: {pcInfo.age}<br />
      職業: {pcInfo.job}<br />

      <hr />
      Status:<br />
      HP:{pcInfo.status.hp}<br />
      MP:{pcInfo.status.mp}<br />
      SAN:{pcInfo.status.san}<br />
    </div>
  )
}

export default PcCard
