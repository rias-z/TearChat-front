import React from 'react'

import { statusAsset } from '../../config/statusAsset'

// styles
import { Input, Table, Tbody, Th, Td } from './styles'


const SkillPointsTable = (props) => {
  const { makePcInfo } = props

  const renderSkillPointsTableBody = () => {
    const { eduPoints, intPoints } = makePcInfo.skillPoints
    let usedEduPoints = 0
    let usedIntPoints = 0

    Object.keys(makePcInfo.skill).forEach(skillSet => {
      Object.keys(makePcInfo.skill[skillSet]).forEach(skill => {
        if (makePcInfo.skill[skillSet][skill].eduPoint > 0) {
          usedEduPoints += makePcInfo.skill[skillSet][skill].eduPoint
        }
        if (makePcInfo.skill[skillSet][skill].intPoint > 0) {
          usedIntPoints += makePcInfo.skill[skillSet][skill].intPoint
        }
      })
    })

    return (
      <Tbody>
        <tr>
          <Td>職業P</Td>
          <Td>
            <Input
              type='text'
              name='skillPoints_usedEduPoints'
              readOnly
              value={usedEduPoints}
            />
          </Td>
          <Td width='10px'>/</Td>
          <Td>
            <Input
              type='text'
              name='skillPoints_eduPoints'
              readOnly
              value={eduPoints}
            />
          </Td>
        </tr>
        <tr>
          <Td>興味P</Td>
          <Td>
            <Input
              type='text'
              name='skillPoints_usedIntPoints'
              readOnly
              value={usedIntPoints}
            />
          </Td>
          <Td width='10px'>/</Td>
          <Td>
            <Input
              type='text'
              name='skillPoints_intPoints'
              readOnly
              value={intPoints}
            />
          </Td>
        </tr>
      </Tbody>
    )
  }

  return (
    <div className='statusTable'>
      <h3>技能値</h3>
        <Table name='status'>
          {renderSkillPointsTableBody()}
        </Table>
    </div>
  )
}

export default SkillPointsTable
