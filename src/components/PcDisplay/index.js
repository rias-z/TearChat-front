import React from 'react'


const PcDisplay = (props) => {
  const { pcInfo } = props

  return (
    <div className='ColumnPc'>
      name: {pcInfo.pcName}<br />
      age: {pcInfo.age}<br />
      job: {pcInfo.job}<br />
    </div>
  )
}

export default PcDisplay
