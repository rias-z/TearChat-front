import { personalAsset } from '../config/personalAsset'
import { statusAsset } from '../config/statusAsset'
import { skillAsset } from '../config/skillAsset'


export const initializedEditPcInfo = (component) => {
  const personalState = personalAsset

  let statusState = {}
  statusAsset.forEach(status => {
    statusState = Object.assign({}, statusState, {
      [status.name]: {
        point: 0,
        modifyPoint: 0,
        totalPoint: 0,
      }
    })

    if (status.name === 'hp' || status.name === 'mp' || status.name === 'san') {
      statusState = Object.assign({}, statusState, {
        [status.name]: {
          point: 0,
          modifyPoint: 0,
          totalPoint: 0,
          currentPoint: 0,
        }
      })
    }
  })

  const skillPoints = {
    eduPoints: 0,
    intPoints: 0,
  }

  let skillState = {}
  skillAsset.forEach(skill => {
    let skillContentsStatus = {}

    skill.contents.forEach(content => {
      let _initialPoint = 0

      if (content.initialPoint) {
        _initialPoint = content.initialPoint
      }

      skillContentsStatus = Object.assign({}, skillContentsStatus, {
        [content.name]: {
          initialPoint: _initialPoint,
          eduPoint: 0,
          intPoint: 0,
          modifyPoint: 0,
          totalPoint: _initialPoint,
        }
      })
    })

    skillState = Object.assign({}, skillState, {
      [skill.name]: skillContentsStatus
    })
  })

  component.setState({
    editPcInfo: {
      personal: personalState,
      status: statusState,
      skillPoints: skillPoints,
      skill: skillState,
    }
  })
}

export const _setStatusState = (statusState, name, valueType, value) => {
  // 現在値の変更の場合
  if (valueType === 'currentPoint') {
    const updateStatusState = Object.assign({}, statusState, {
      [name]: {
        ...statusState[name],
        [valueType]: value,
      }
    })

    return updateStatusState
  }

  let totalPoint = value


  if (valueType === 'point') {
    totalPoint += statusState[name].modifyPoint
  } else if (valueType === 'modifyPoint') {
    totalPoint += statusState[name].point
  }

  // 1. 合計値を算出
  let updateStatusState = Object.assign({}, statusState, {
    [name]: {
      ...statusState[name],
      [valueType]: value,
      totalPoint: totalPoint,
    }
  })

  // 2. 固定値を算出
  let updateFixedStatusState = {}
  switch (name) {
    // HP
    case 'con': {
      const hpPoint = Math.floor((totalPoint + statusState.siz.totalPoint) / 2)
      const hpTotalPoint = hpPoint + statusState.hp.modifyPoint

      updateFixedStatusState = {
        hp: {
          ...statusState.hp,
          point: hpPoint,
          totalPoint: hpTotalPoint,
          currentPoint: hpTotalPoint,
        }
      }
      break
    }
    case 'siz': {
      const hpPoint = Math.floor((totalPoint + statusState.con.totalPoint) / 2)
      const hpTotalPoint = hpPoint + statusState.hp.modifyPoint

      updateFixedStatusState = {
        hp: {
          ...statusState.hp,
          point: hpPoint,
          totalPoint: hpTotalPoint,
          currentPoint: hpTotalPoint,
        }
      }
      break
    }
    // MP, SAN, 幸運
    case 'pow': {
      updateFixedStatusState = {
        mp: {
          ...statusState.mp,
          point: totalPoint + statusState.mp.modifyPoint,
          totalPoint: totalPoint,
          currentPoint: totalPoint,
        },
        san: {
          ...statusState.san,
          point: (totalPoint * 5) + statusState.san.modifyPoint,
          totalPoint: totalPoint * 5,
          currentPoint: totalPoint * 5,
        },
        lucky: {
          ...statusState.lucky,
          point: (totalPoint * 5) + statusState.lucky.modifyPoint,
          totalPoint: totalPoint * 5,
        }
      }
      break
    }
    // アイデア
    case 'int': {
      updateFixedStatusState = {
        idea: {
          ...statusState.idea,
          point: (totalPoint * 5) + statusState.idea.modifyPoint,
          totalPoint: totalPoint * 5,
        }
      }
      break
    }
    // 知識
    case 'edu': {
      updateFixedStatusState = {
        knowledge: {
          ...statusState.knowledge,
          point: (totalPoint * 5) + statusState.knowledge.modifyPoint,
          totalPoint: totalPoint * 5,
        }
      }
      break
    }
    default:
      break
  }

  // 変更がなければstatusの合計値のみを変更したstatusStateを返す
  if (Object.keys(updateFixedStatusState).length > 0) {
    updateStatusState = Object.assign({}, updateStatusState, updateFixedStatusState)
  }

  return updateStatusState
}

// _setStatusStateによって変更されたstatuStateを元にスキル技能値を設定
export const _setSkillPointsState = (statusState, skillPointsState, name) => {
  let updateSkillPointsState = skillPointsState

  let addSkillPointsState = {}
  switch (name) {
    // 職業P
    case 'edu': {
      addSkillPointsState = {
        ...skillPointsState,
        eduPoints: statusState[name].totalPoint * 20,
      }
      break
    }
    // 興味P
    case 'int': {
      addSkillPointsState = {
        ...skillPointsState,
        intPoints: statusState[name].totalPoint * 20,
      }
      break
    }
    default:
      break
  }

  if (Object.keys(addSkillPointsState).length > 0) {
    updateSkillPointsState = Object.assign({}, updateSkillPointsState, addSkillPointsState)
  }

  return updateSkillPointsState
}

// _setStatusStateによって変更されたstatuStateを元にスキル初期値を設定
export const _setSkillState = (statusState, skillState, name) => {
  let updateSkillState = skillState

  let addSkillState = {}
  switch (name) {
    // 回避初期値
    case 'dex': {
      const dodgeInitialPoint = statusState.dex.totalPoint * 2
      const totalPoint = (
        dodgeInitialPoint +
        skillState.battle.dodge.intPoint +
        skillState.battle.dodge.eduPoint +
        skillState.battle.dodge.modifyPoint
      )

      addSkillState = {
        battle: {
          ...skillState.battle,
          dodge: {
            ...skillState.battle.dodge,
            initialPoint: dodgeInitialPoint,
            totalPoint: totalPoint
          }
        }
      }
      break
    }
    // 母国語初期値
    case 'edu': {
      const nativeLanguageInitialPoint = statusState.edu.totalPoint * 5
      const totalPoint = (
        nativeLanguageInitialPoint +
        skillState.language.nativeLanguage.intPoint +
        skillState.language.nativeLanguage.eduPoint +
        skillState.language.nativeLanguage.modifyPoint
      )

      addSkillState = {
        language: {
          ...skillState.language,
          nativeLanguage: {
            ...skillState.language.nativeLanguage,
            initialPoint: nativeLanguageInitialPoint,
            totalPoint: totalPoint
          }
        }
      }
      break
    }
    default: {
      break
    }
  }

  if (Object.keys(addSkillState).length > 0) {
    updateSkillState = Object.assign({}, updateSkillState, addSkillState)
  }

  return updateSkillState
}

export const setChangeValue = (component, target, value) => {
  const type = target.split('_')[0] // personal | status | skill

  switch (type) {
    // target = personal_name
    case 'personal': {
      const name = target.split('_')[1]

      component.setState({
        editPcInfo: {
          ...component.state.editPcInfo,
          personal: {
            ...component.state.editPcInfo.personal,
            [name]: value,
          }
        }
      })
      break
    }
    // target = status_str_point
    case 'status': {
      const name = target.split('_')[1]
      const valueType = target.split('_')[2]
      const _value = Number(value)

      // validation
      if (Number.isNaN(_value)) {
        break
      }

      // ステータス変更による合計値と固定値変更
      const newStatusState = _setStatusState(
        component.state.editPcInfo.status,
        name,
        valueType,
        _value
      )

      // ステータス変更によるスキル技能値変更
      const newSkillPointsState = _setSkillPointsState(
        newStatusState,
        component.state.editPcInfo.skillPoints,
        name
      )

      // ステータス変更によるスキル初期値変更
      const newSkillState = _setSkillState(
        newStatusState,
        component.state.editPcInfo.skill,
        name
      )

      component.setState({
        editPcInfo: {
          ...component.state.editPcInfo,
          status: newStatusState,
          skillPoints: newSkillPointsState,
          skill: newSkillState,
        }
      })

      break
    }
    // target = skill_battle_dodge_eduPoint
    case 'skill': {
      const skillType = target.split('_')[1]
      const name = target.split('_')[2]
      const valueType = target.split('_')[3]
      const _value = Number(value)

      // validation
      if (Number.isNaN(_value)) {
        break
      }

      let totalPoint = 0

      // 入力値 (eduPoint | intPoint | modifyPoint)
      totalPoint += _value

      // 初期値
      totalPoint += component.state.editPcInfo.skill[skillType][name].initialPoint

      if (valueType === 'eduPoint') {
        totalPoint += component.state.editPcInfo.skill[skillType][name].intPoint
        totalPoint += component.state.editPcInfo.skill[skillType][name].modifyPoint
      } else if (valueType === 'intPoint') {
        totalPoint += component.state.editPcInfo.skill[skillType][name].eduPoint
        totalPoint += component.state.editPcInfo.skill[skillType][name].modifyPoint
      } else if (valueType === 'modifyPoint') {
        totalPoint += component.state.editPcInfo.skill[skillType][name].eduPoint
        totalPoint += component.state.editPcInfo.skill[skillType][name].intPoint
      }

      const newState = Object.assign({}, component.state.editPcInfo.skill, {
        [skillType]: {
          ...component.state.editPcInfo.skill[skillType],
          [name]: {
            ...component.state.editPcInfo.skill[skillType][name],
            [valueType]: _value,
            totalPoint: totalPoint,
          }
        }
      })

      component.setState({
        editPcInfo: {
          ...component.state.editPcInfo,
          skill: newState,
        }
      })
      break
    }
    default:
      break
  }
}
