import { personalAsset } from '../../config/personalAsset'
import { statusAsset } from '../../config/statusAsset'
import { skillAsset } from '../../config/skillAsset'


export const initializedTableState = (component) => {
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
          totalPoint: 0,
        }
      })
    })

    skillState = Object.assign({}, skillState, {
      [skill.name]: skillContentsStatus
    })
  })

  component.setState({
    makePcInfo: {
      personal: personalState,
      status: statusState,
      skillPoints: skillPoints,
      skill: skillState,
    }
  })
}

export const _setStatusState = (status, name, valueType, value) => {
  // 通常処理
  // pointかmodifyPointのステータスが入力された場合，totalPointも更新する
  let _totalPoint = value

  if (valueType === 'point') {
    _totalPoint += status[name].modifyPoint
  } else if (valueType === 'modifyPoint') {
    _totalPoint += status[name].point
  }

  let newState = Object.assign({}, status, {
    [name]: {
      ...status[name],
      [valueType]: value,
      totalPoint: _totalPoint,
    }
  })

  // 特殊処理 (HP, MP, SAN, アイデア, 幸運, 知識)
  // HP: (con + siz) / 2
  // MP: pow * 5
  // SAN: pow * 5
  // アイデア: int * 5
  // 幸運: pow * 5
  // 知識: edu * 5
  // ダメージボーナス: str + siz
  //   2-12  -> -1D6
  //   13-16 -> -1D4
  //   17-24 -> 0
  //   25-32 -> +1D4
  //   33-40 -> +1D6
  //   41-56 -> +2D6
  //   57-72 -> +3D6
  //   73-88 -> +4D6

  let addStatusState = {}

  switch (name) {
    // HP
    case 'con': {
      const _hpPoint = Math.floor((_totalPoint + status.siz.totalPoint) / 2)
      const _hpTotalPoint = _hpPoint + status.hp.modifyPoint

      addStatusState = {
        hp: {
          ...status.hp,
          point: _hpPoint,
          totalPoint: _hpTotalPoint
        }
      }
      break
    }
    // HP
    case 'siz': {
      const _hpPoint = Math.floor((_totalPoint + status.con.totalPoint) / 2)
      const _hpTotalPoint = _hpPoint + status.hp.modifyPoint

      addStatusState = {
        hp: {
          ...status.hp,
          point: _hpPoint,
          totalPoint: _hpTotalPoint
        }
      }
      break
    }
    // MP/SAN/幸運
    case 'pow': {
      const _mpPoint = _totalPoint
      const _mpTotalPoint = _mpPoint + status.mp.modifyPoint
      const _sanPoint = _totalPoint * 5
      const _sanTotalPoint = _sanPoint + status.san.modifyPoint
      const _luckyPoint = _totalPoint * 5
      const _luckyTotalPoint = _luckyPoint + status.lucky.modifyPoint

      addStatusState = {
        mp: {
          ...status.mp,
          point: _mpPoint,
          totalPoint: _mpTotalPoint
        },
        san: {
          ...status.san,
          point: _sanPoint,
          totalPoint: _sanTotalPoint
        },
        lucky: {
          ...status.lucky,
          point: _luckyPoint,
          totalPoint: _luckyTotalPoint
        }
      }
      break
    }
    // アイデア/興味ポイント
    case 'int': {
      const _ideaPoint = _totalPoint * 5
      const _ideaTotalPoint = _ideaPoint + status.idea.modifyPoint

      addStatusState = {
        idea: {
          ...status.idea,
          point: _ideaPoint,
          totalPoint: _ideaTotalPoint
        }
      }
      break
    }
    // 知識/職業ポイント
    case 'edu': {
      const _knowledgePoint = _totalPoint * 5
      const _knowledgeTotalPoint = _knowledgePoint + status.knowledge.modifyPoint

      addStatusState = {
        knowledge: {
          ...status.knowledge,
          point: _knowledgePoint,
          totalPoint: _knowledgeTotalPoint
        }
      }
      break
    }
    default:
      break
  }

  if (Object.keys(addStatusState).length > 0) {
    newState = Object.assign({}, newState, addStatusState)
  }

  return newState
}

// ステータス変更による技能ポイントを変更した値を返す
export const _setSkillPointsState = (statusState, skillPointsState, name) => {
  let newState = skillPointsState
  let addSkillPointsState = {}

  switch (name) {
    // 職業ポイント
    case 'edu': {
      const eduPoints = statusState[name].totalPoint * 20

      addSkillPointsState = {
        ...skillPointsState,
        eduPoints: eduPoints,
      }
      break
    }
    // 興味ポイント
    case 'int': {
      const intPoints = statusState[name].totalPoint * 10

      addSkillPointsState = {
        ...skillPointsState,
        intPoints: intPoints,
      }
      break
    }
    default:
      break
  }

  // 変更があった場合更新
  if (Object.keys(addSkillPointsState).length > 0) {
    newState = Object.assign({}, newState, addSkillPointsState)
  }

  return newState
}

// ステータス変更によるスキル初期値を変更した値を返す
export const _setSkillState = (statusState, skillState, name) => {
  let newState = skillState
  let addSkillState = {}

  switch (name) {
    // 回避初期値 (dex * 2)
    case 'dex': {
      const avoidanceInitialPoint = statusState.dex.totalPoint * 2
      const totalPoint = (
        avoidanceInitialPoint +
        skillState.battle.avoidance.intPoint +
        skillState.battle.avoidance.eduPoint +
        skillState.battle.avoidance.modifyPoint
      )

      addSkillState = {
        battle: {
          ...skillState.battle,
          avoidance: {
            ...skillState.battle.avoidance,
            initialPoint: avoidanceInitialPoint,
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

  // 変更があった場合更新
  if (Object.keys(addSkillState).length > 0) {
    newState = Object.assign({}, newState, addSkillState)
  }

  return newState
}

export const setChangeValue = (component, target, value) => {
  const type = target.split('_')[0] // personal | status | skill

  switch (type) {
    case 'personal': {
      const name = target.split('_')[1] // name | age | job
      let _value = null

      // validation
      if (name === 'age') {
        _value = Number(value)
      } else {
        _value = value
      }

      component.setState({
        makePcInfo: {
          ...component.state.makePcInfo,
          personal: {
            ...component.state.makePcInfo.personal,
            [name]: _value,
          }
        }
      })
      break
    }
    case 'status': {
      // status_str_point
      const name = target.split('_')[1] // str | con | pow
      const valueType = target.split('_')[2] // point | modifyPoint
      // validation
      const _value = Number(value)

      // ステータス変更による他ステータス変更
      const newStatusState = _setStatusState(
        component.state.makePcInfo.status,
        name,
        valueType,
        _value
      )

      // ステータス変更による技能ポイント変更
      const newSkillPointsState = _setSkillPointsState(
        newStatusState,
        component.state.makePcInfo.skillPoints,
        name,
      )

      // ステータス変更によるスキル初期値変更
      const newSkillState = _setSkillState(
        newStatusState,
        component.state.makePcInfo.skill,
        name
      )

      component.setState({
        makePcInfo: {
          ...component.state.makePcInfo,
          status: newStatusState,
          skillPoints: newSkillPointsState,
          skill: newSkillState,
        }
      })
      break
    }
    case 'skill': {
      // skill battle avoidance eduPoint
      const skillType = target.split('_')[1]
      const name = target.split('_')[2]
      const valueType = target.split('_')[3]
      // validation
      const _value = Number(value)


      let _totalPoint = _value

      _totalPoint += component.state.makePcInfo.skill[skillType][name].initialPoint

      if (valueType === 'eduPoint') {
        _totalPoint += component.state.makePcInfo.skill[skillType][name].intPoint
        _totalPoint += component.state.makePcInfo.skill[skillType][name].modifyPoint
      } else if (valueType === 'intPoint') {
        _totalPoint += component.state.makePcInfo.skill[skillType][name].eduPoint
        _totalPoint += component.state.makePcInfo.skill[skillType][name].modifyPoint
      } else if (valueType === 'modifyPoint') {
        _totalPoint += component.state.makePcInfo.skill[skillType][name].eduPoint
        _totalPoint += component.state.makePcInfo.skill[skillType][name].intPoint
      }

      const newState = Object.assign({}, component.state.makePcInfo.skill, {
        [skillType]: {
          ...component.state.makePcInfo.skill[skillType],
          [name]: {
            ...component.state.makePcInfo.skill[skillType][name],
            [valueType]: _value,
            totalPoint: _totalPoint,
          }
        }
      })

      component.setState({
        makePcInfo: {
          ...component.state.makePcInfo,
          skill: newState,
        }
      })
      break
    }
    default:
      break
  }
}
