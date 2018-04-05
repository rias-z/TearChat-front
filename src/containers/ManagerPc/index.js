import React from 'react'
import { connect } from 'react-redux'

// components
import PcEditDialog from '../../components/PcEditDialog'

// logic
import {
  initializedPcList,
  createPc,
  handleUpdatePcInfo,
  handleUpdatePcInfoWithThumbnail,
} from './logic'


const PcList = (props) => {
  const pcList = props.pcInfoList.map(pcInfo => {
    return (
      <div key={pcInfo._id}>
        name: {pcInfo.pcName} <br />
        thumbnail:<br />
        <img
          alt='img'
          width='72'
          height='72'
          src={pcInfo.thumbnail}
        />
        <br />
        <li>age:{pcInfo.age}</li>
        <li>job:{pcInfo.job}</li>

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

    const onMakePc = (e) => {
      e.preventDefault()

      const newPcInfo = {
        pcName: e.target.pcName.value,
        age: e.target.age.value,
        job: e.target.job.value,
      }

      this.props.createPc(newPcInfo)
    }

    return (
      <div className='ManagerPc'>
        <h2>ManagerPc</h2>
        <h3>作成したPC一覧</h3>
        {/* クリックしてPC編集画面をモーダルで表示 */}
        <PcList
          pcInfoList={pcInfoList}
          onUpdatePcInfo={this.props.handleUpdatePcInfo}
          onUpdatePcInfoWithThumbnail={this.props.handleUpdatePcInfoWithThumbnail}
        />

        <h3>PC作成</h3>
        {/* 普段はバーで閉じてる，クリックで拡大 */}

        <form
          onSubmit={onMakePc}
        >
          <input type='text' name='pcName' defaultValue='TOHU' />
          <br />
          <input type='text' name='age' defaultValue='20' />
          <br />
          <input type='text' name='job' defaultValue='student' />
          <br />
          <button type='submit'>make</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  pcInfoList: state.ManagerPc.pcInfoList,
})

const mapDispatchToProps = (dispatch) => ({
  initializedPcList: () => dispatch(initializedPcList()),
  createPc: (newPcInfo) => dispatch(createPc(newPcInfo)),
  handleUpdatePcInfo: (pcInfo) => dispatch(handleUpdatePcInfo(pcInfo)),
  handleUpdatePcInfoWithThumbnail: (pcInfo, imageFile) =>
    dispatch(handleUpdatePcInfoWithThumbnail(pcInfo, imageFile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerPc)
