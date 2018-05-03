import React from 'react'
import { connect } from 'react-redux'

// components
import ColumnRoot from '../../components/ColumnRoot'
import ColumnHeader from '../../components/ColumnHeader'
import ColumnBody from '../../components/ColumnBody'
import PcEditDialog from '../../components/PcEditDialog'
import PcCurrentStatusDisplay from '../../components/PcCurrentStatusDisplay'

// logic
import {
  handleUpdatePcInfo,
  handleUpdatePcInfoWithThumbnail,
} from './logic'

import { STATIC_ENDPOINT } from '../../config/config'


const ColumnPc = (props) => {
  const { fkPcId, roomPcInfo } = props
  const {
    onClose,
    handleUpdatePcInfo,
    handleUpdatePcInfoWithThumbnail
  } = props

  // 静的に表示するPC情報
  const pcIdx = roomPcInfo.findIndex(pc => pc._id === fkPcId)
  const pcInfo = roomPcInfo[pcIdx]

  const renderBasePcInfo = (
    <div>
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
    </div>
  )

  return (
      <ColumnRoot>
        <ColumnHeader
          onClose={onClose}
          name="PC"
        />
        <ColumnBody>
          {/* PCの基本情報 */}
          {renderBasePcInfo}

          {/* PC情報の編集 */}
          <PcEditDialog
            editPcInfo={pcInfo}
            onUpdatePcInfo={handleUpdatePcInfo}
            onUpdatePcInfoWithThumbnail={handleUpdatePcInfoWithThumbnail}
          />

          <hr />

          {/* 現在ステータスの表示/編集 */}
          <PcCurrentStatusDisplay
            pcInfo={pcInfo}
            onUpdatePcInfo={handleUpdatePcInfo}
            onUpdatePcInfoWithThumbnail={handleUpdatePcInfoWithThumbnail}
          />
          {/* ステータスや技能値の詳細表示 */}

        </ColumnBody>
      </ColumnRoot>
  )
}

const mapStateToProps = (state) => ({
  roomPcInfo: state.RoomPcView.roomPcInfo,
  socket: state.Session.socket,
})

const mapDispatchToProps = (dispatch) => ({
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
  handleUpdatePcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handleUpdatePcInfoWithThumbnail(pcInfo, imageFile))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnPc)
