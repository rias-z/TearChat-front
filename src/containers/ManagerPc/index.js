import React from 'react'
import { connect } from 'react-redux'

import { STATIC_ENDPOINT } from '../../config/config'

// components
import PcEditDialog from '../../components/PcEditDialog'
import PcMakeDialog from '../../components/PcMakeDialog'

// logic
import {
  initializedPcList,
  handleMakePc,
  handleMakePcWithThumbnail,
  handleUpdatePcInfo,
  handleUpdatePcInfoWithThumbnail,
} from './logic'


const PcList = (props) => {
  const pcList = props.pcInfoList.map(pcInfo => {
    return (
      <div key={pcInfo._id}>
        <h3>パーソナルデータ</h3>
        名前: {pcInfo.personal.name}__
        年齢: {pcInfo.personal.age}__
        職業: {pcInfo.personal.job}
        サムネイル:<br />
        <img
          alt='img'
          width='72'
          height='72'
          src={STATIC_ENDPOINT + pcInfo.thumbnail}
        />

        <h3>ステータス</h3>
        HP: {pcInfo.status.hp.totalPoint}__
        SAN: {pcInfo.status.san.totalPoint}

        <PcEditDialog
          pcInfo={pcInfo}
          onUpdatePcInfo={props.onUpdatePcInfo}
          onUpdatePcInfoWithThumbnail={props.onUpdatePcInfoWithThumbnail}
        />
        <hr />
      </div>
    )
  })

  return (
    <div className='PcList'>
      { pcList }
    </div>
  )
}


class ManagerPc extends React.Component {
  componentWillMount() {
    // 部屋情報初期化
    this.props.initializedPcList(this.props)
  }

  render() {
    const { pcInfoList } = this.props

    return (
      <div className='ManagerPc'>
        <h2>PC管理画面</h2>

        <PcMakeDialog
          onMakePc={this.props.handleMakePc}
          onMakePcWithThumbnail={this.props.handleMakePcWithThumbnail}
        />

        <h3>作成したPC一覧</h3>

        <hr />

        <PcList
          pcInfoList={pcInfoList}
          onUpdatePcInfo={this.props.handleUpdatePcInfo}
          onUpdatePcInfoWithThumbnail={this.props.handleUpdatePcInfoWithThumbnail}
        />

      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  pcInfoList: state.ManagerPc.pcInfoList,
})

const mapDispatchToProps = (dispatch) => ({
  handleMakePc: (pcInfo) => dispatch(handleMakePc(pcInfo)),
  handleMakePcWithThumbnail: (pcInfo, imageFiles) =>
    dispatch(handleMakePcWithThumbnail(pcInfo, imageFiles)),
  // createPc: (newPcInfo) => dispatch(createPc(newPcInfo)),
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
  handleUpdatePcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handleUpdatePcInfoWithThumbnail(pcInfo, imageFile)),
  initializedPcList: () => dispatch(initializedPcList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerPc)
