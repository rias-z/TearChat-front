import React from 'react'

import { statusAsset } from '../../config/statusAsset'
import { skillAsset } from '../../config/skillAsset'


class PcCurrentStatusDisplay extends React.Component {
  state = {
    editPcInfo: {},
    isEdit: false,
    isShowStatus: false,
    isShowSkill: false,
    isShowAssignedSkill: false,
  }

  handleOpen = () => {
    const { pcInfo } = this.props

    this.setState({
      editPcInfo: pcInfo,
      isEdit: true,
    })
  }

  handleClose = () => {
    this.setState({
      isEdit: false,
    })
  }

  handleSubmit = async () => {
    const { onUpdatePcInfo } = this.props

    // PC情報保存
    await onUpdatePcInfo(this.state.editPcInfo)

    // editPcInfo初期化
    this.setState({
      editPcInfo: {},
      isEdit: false,
    })
  }

  // ミニ編集で行うステータス変更
  handleChangeValue = (e) => {
    e.preventDefault()

    const name = e.target.name.split('_')[1]
    const value = Number(e.target.value)

    // validation
    if (Number.isNaN(value)) {
      return
    }

    // ステータス変更による合計値と固定値変更
    this.setState({
      editPcInfo: {
        ...this.state.editPcInfo,
        // status: newStatusState,
        status: {
          ...this.state.editPcInfo.status,
          [name]: {
            ...this.state.editPcInfo.status[name],
            currentPoint: value,
          }
        }
      }
    })
  }

  render() {
    const { pcInfo } = this.props

    const editButton = (!this.state.isEdit) ? (
      <span>
        <button onClick={this.handleOpen}>ミニ編集</button>
      </span>
    ) : (
      <span>
        <button onClick={this.handleClose}>やめる</button>
        <button onClick={this.handleSubmit}>更新</button>
      </span>
    )

    const showStatusButton = (!this.state.isShowStatus) ? (
      <span>
        <button onClick={() => this.setState({ isShowStatus: true })}>
          ステータス
        </button>
      </span>
    ) : (
      <span>
        <button onClick={() => this.setState({ isShowStatus: false })}>
          ステータス非表示
        </button>
      </span>
    )

    const showSkillButton = (!this.state.isShowSkill) ? (
      <span>
        <button onClick={() => this.setState({ isShowSkill: true })}>
          技能値
        </button>
      </span>
    ) : (
      <span>
        <button onClick={() => this.setState({ isShowSkill: false })}>
          技能値非表示
        </button>
      </span>
    )

    const showSkillButtonOnlyAssigned = (!this.state.isShowAssignedSkill) ? (
      <span>
        <button onClick={() => this.setState({ isShowAssignedSkill: true })}>
          取得技能値
        </button>
      </span>
    ) : (
      <span>
        <button onClick={() => this.setState({ isShowAssignedSkill: false })}>
          取得技能値非表示
        </button>
      </span>
    )


    const renderCurrentStatus = (!this.state.isEdit) ? (
      <div>
        HP:{pcInfo.status.hp.currentPoint}/{pcInfo.status.hp.totalPoint}
        <br />
        MP:{pcInfo.status.mp.currentPoint}/{pcInfo.status.mp.totalPoint}
        <br />
        SAN:{pcInfo.status.san.currentPoint}/{pcInfo.status.san.totalPoint}
        <hr />
      </div>
    ) : (
      <div>
        HP:
        <input
          type='text'
          name='status_hp'
          onChange={this.handleChangeValue}
          defaultValue={this.state.editPcInfo.status.hp.currentPoint}
          required
        />
        /{pcInfo.status.hp.totalPoint}
        <br />
        MP:
        <input
          type='text'
          name='personal_mp'
          onChange={this.handleChangeValue}
          defaultValue={this.state.editPcInfo.status.mp.currentPoint}
        />
        /{pcInfo.status.mp.totalPoint}
        <br />
        SAN:
        <input
          type='text'
          name='status_san'
          onChange={this.handleChangeValue}
          defaultValue={this.state.editPcInfo.status.san.currentPoint}
        />
        /{pcInfo.status.san.totalPoint}
        <br />
      </div>
    )

    const renderStatus = () => {
      if (this.state.isShowStatus) {
        const statusList = statusAsset.map(status => {
          const { totalPoint } = pcInfo.status[status.name]

          return (
            <div key={status.name}>{status.displayName}: {totalPoint}</div>
          )
        })

        return (
          <div>
            {statusList}
            <hr />
          </div>
        )
      } else {
        return null
      }
    }

    const renderSkill = () => {
      if (this.state.isShowSkill) {
        const skillSetList = skillAsset.map(skillSet => {
          const skillList = skillSet.contents.map(skill => {
            const { totalPoint } = pcInfo.skill[skillSet.name][skill.name]

            return (
              <li key={skill.name}>{skill.displayName} [{totalPoint}]</li>
            )
          })

          return (
            <div key={skillSet.name}>
              <div>[{skillSet.displayName}]</div>
              {skillList}
            </div>
          )
        })

        return (
          <div>
            {skillSetList}
            <hr />
          </div>
        )
      } else {
        return null
      }
    }


    const renderAssignedSkill = () => {
      if (this.state.isShowAssignedSkill) {
        const skillSetList = []

        skillAsset.forEach(skillSet => {
          const skillList = []

          skillSet.contents.forEach(skill => {
            const {
              eduPoint, intPoint, totalPoint
            } = pcInfo.skill[skillSet.name][skill.name]

            if (eduPoint > 0 || intPoint > 0) {
              const skillItem = (
                <li key={skill.name}>{skill.displayName} [{totalPoint}]</li>
              )

              skillList.push(skillItem)
            }
          })

          if (Object.keys(skillList).length > 0) {
            const skillSetItem = (
              <div key={skillSet.name}>
                <div>[{skillSet.displayName}]</div>
                {skillList}
              </div>
            )

            skillSetList.push(skillSetItem)
          }
        })

        return (
          <div>
            {skillSetList}
            <hr />
          </div>
        )
      } else {
        return null
      }
    }

    return (
      <div className='PcCurrentStatusDisplay'>
        {/* 現在ステータスの表示 */}
        現在ステータス__{editButton}<br />
        {renderCurrentStatus}

        {/* 表示/非表示ボタン */}
        {showStatusButton}
        {showSkillButton}
        {showSkillButtonOnlyAssigned}

        {/* ステータスや技能値などの表示 */}
        {renderStatus()}
        {renderSkill()}
        {renderAssignedSkill()}
      </div>
    )
  }
}

export default PcCurrentStatusDisplay
