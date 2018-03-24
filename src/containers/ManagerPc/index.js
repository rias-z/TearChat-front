import React from 'react'
import { connect } from 'react-redux'

// logic
import { initializedPcList, createPc } from './logic'


const PcList = (props) => {
  const pcList = props.pcList.map(pc => {
    return (
      <div key={pc._id}>
        {pc.pcName}
        <li>age:{pc.age}</li>
        <li>job:{pc.job}</li>
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
    const onMakePc = (e) => {
      e.preventDefault()
      const pcName = e.target.pcName.value
      const age = e.target.age.value
      const job = e.target.job.value
      const newPcInfo = {
        pcName: pcName,
        age: age,
        job: job,
      }

      this.props.createPc(newPcInfo)
    }

    return (
      <div className='ManagerPc'>
        <h2>ManagerPc</h2>
        <h3>作成したPC一覧</h3>
        {/* クリックしてPC編集画面をモーダルで表示 */}
        <PcList pcList={this.props.pcList} />

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
  pcList: state.ManagerPc.pcList,
})

const mapDispatchToProps = (dispatch) => ({
  initializedPcList: () => dispatch(initializedPcList()),
  createPc: (newPcInfo) => dispatch(createPc(newPcInfo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerPc)
