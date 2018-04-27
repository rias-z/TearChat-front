import React from 'react'

// container
import PcEditDialog from '../PcEditDialog'

import { STATIC_ENDPOINT } from '../../config/config'


const PcCard = (props) => {
  const { pcInfo } = props
  const { onUpdatePcInfo, onUpdatePcInfoWithThumbnail } = props

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
      <br />
      <PcEditDialog
        editPcInfo={pcInfo}
        onUpdatePcInfo={onUpdatePcInfo}
        onUpdatePcInfoWithThumbnail={onUpdatePcInfoWithThumbnail}
      />

      <hr />
      簡易ステータス__[ 変更 ]<br />
      HP:{pcInfo.status.hp.totalPoint}__
      MP:{pcInfo.status.mp.totalPoint}__
      SAN:{pcInfo.status.san.totalPoint}
      <hr />
    </div>
  )
}

export default PcCard
