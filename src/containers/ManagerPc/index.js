import React from 'react'
import { connect } from 'react-redux'

import { STATIC_ENDPOINT } from '../../config/config'

// components
import PcEditDialog from '../../components/PcEditDialog'
import PcMakeDialog from '../../components/PcMakeDialog'

// logic
import {
  initializedPcList,
  handlePostPcInfo,
  handlePostPcInfoWithThumbnail,
  handleUpdatePcInfo,
  handleUpdatePcInfoWithThumbnail,
} from './logic'

// styles
import {
  ManagerPcDiv,
  FlexDiv,
  FlexPartDiv,
  PartDiv,
  WrapDiv,
  PcEditDialogDiv
} from './styles'


const PcList = (props) => {
  const { onUpdatePcInfo, onUpdatePcInfoWithThumbnail } = props

  const pcList = props.pcInfoList.map(pcInfo => {
    return (
      <FlexDiv key={pcInfo._id}>
        <WrapDiv>
          <h3>{pcInfo.personal.name}</h3>

          <FlexPartDiv>
            <PartDiv>
              <img
                alt='img'
                width='72'
                height='72'
                src={STATIC_ENDPOINT + pcInfo.thumbnail}
              />
            </PartDiv>
            <PartDiv>
              年齢: {pcInfo.personal.age}
              <br />
              職業: {pcInfo.personal.job}
            </PartDiv>
          </FlexPartDiv>

          <br />

          <strong>[ ステータス ]</strong>
          <br />
          STR: {pcInfo.status.str.totalPoint}/
          CON: {pcInfo.status.con.totalPoint}/
          POW: {pcInfo.status.pow.totalPoint}/
          DEX: {pcInfo.status.dex.totalPoint}/
          APP: {pcInfo.status.app.totalPoint}/
          SIZ: {pcInfo.status.siz.totalPoint}/
          INT: {pcInfo.status.int.totalPoint}/
          EDU: {pcInfo.status.edu.totalPoint}
          <br />
          HP: {pcInfo.status.hp.totalPoint}/
          MP: {pcInfo.status.mp.totalPoint}/
          SAN: {pcInfo.status.san.totalPoint}/
          アイデア: {pcInfo.status.idea.totalPoint}/
          幸運: {pcInfo.status.lucky.totalPoint}/
          知識: {pcInfo.status.knowledge.totalPoint}

        </WrapDiv>
        <PcEditDialogDiv>
          <PcEditDialog
            editPcInfo={pcInfo}
            onUpdatePcInfo={onUpdatePcInfo}
            onUpdatePcInfoWithThumbnail={onUpdatePcInfoWithThumbnail}
          />
        </PcEditDialogDiv>
      </FlexDiv>
    )
  })

  return (
    <div className='PcList'>
      <h3>作成したPC一覧</h3>
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
    const {
      handlePostPcInfo,
      handlePostPcInfoWithThumbnail,
      handleUpdatePcInfo,
      handleUpdatePcInfoWithThumbnail
    } = this.props

    return (
      <ManagerPcDiv className='ManagerPc'>
        <h2>PC管理画面</h2>

        <PcMakeDialog
          onUpdatePcInfo={handlePostPcInfo}
          onUpdatePcInfoWithThumbnail={handlePostPcInfoWithThumbnail}
        />

        <PcList
          pcInfoList={pcInfoList}
          onUpdatePcInfo={handleUpdatePcInfo}
          onUpdatePcInfoWithThumbnail={handleUpdatePcInfoWithThumbnail}
        />
      </ManagerPcDiv>
    )
  }
}


const mapStateToProps = (state) => ({
  pcInfoList: state.ManagerPc.pcInfoList,
})

const mapDispatchToProps = (dispatch) => ({
  handlePostPcInfo: (pcInfo) => dispatch(handlePostPcInfo(pcInfo)),
  handlePostPcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handlePostPcInfoWithThumbnail(pcInfo, imageFile)),
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
  handleUpdatePcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handleUpdatePcInfoWithThumbnail(pcInfo, imageFile)),
  initializedPcList: () => dispatch(initializedPcList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerPc)
