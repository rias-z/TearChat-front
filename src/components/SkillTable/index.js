import React from 'react'

import { skillAsset } from '../../config/skillAsset'

// styles
import { Input, Table, Tbody, Th, Td } from './styles'


const SkillTable = (props) => {
  const { editPcInfo } = props
  const { onChangeValue } = props

  const renderSkillTableHeader = () => {
    return (
      <thead>
        <tr>
          <Th width='100px'>技能名</Th>
          <Th>初期値</Th>
          <Th>職業P</Th>
          <Th>興味P</Th>
          <Th>修正値</Th>
          <Th>合計</Th>
        </tr>
      </thead>
    )
  }

  const renderSkillTableBody = (skillSetName, contents) => {
    const frame = contents.map(skill => {
      const name = 'skill_' + skillSetName + '_' + skill.name

      const {
        initialPoint, eduPoint, intPoint, modifyPoint, totalPoint
      } = editPcInfo.skill[skillSetName][skill.name]

      return (
        <tr key={name}>
          <Td>{skill.displayName}</Td>
          <Td>
            <Input
              colorTheme='#cccccc'
              type='text'
              name={name + '_initialPoint'}
              readOnly
              value={initialPoint}
            />
          </Td>
          <Td>
            <Input
              type='text'
              name={name + '_eduPoint'}
              onChange={onChangeValue}
              value={eduPoint || ''}
            />
          </Td>
          <Td>
            <Input
              type='text'
              name={name + '_intPoint'}
              onChange={onChangeValue}
              value={intPoint || ''}
            />
          </Td>
          <Td>
            <Input
              type='text'
              name={name + '_modifyPoint'}
              onChange={onChangeValue}
              value={modifyPoint || ''}
            />
          </Td>
          <Td>
            <Input
              colorTheme='#cccccc'
              type='text'
              name={name + '_totalPoint'}
              readOnly
              value={totalPoint}
            />
          </Td>
        </tr>
      )
    })

    return (
      <Tbody>
        {frame}
      </Tbody>
    )
  }

  const skillTable = skillAsset.map(skillSet => {
    return (
      <div key={skillSet.name}>
        <h3>{skillSet.displayName}</h3>
          <Table name={skillSet.name}>
            {renderSkillTableHeader()}
            {renderSkillTableBody(skillSet.name, skillSet.contents)}
          </Table>
      </div>
    )
  })

  return (
    <div className='SkillTable'>
      {skillTable}
    </div>
  )
}

export default SkillTable
