import React from 'react'


const PcCard = (props) => {
  const { pcInfo } = props

  return (
    <div className='ColumnPc'>
      <img
        alt='img'
        width='72'
        height='72'
        src={pcInfo.thumbnail}
      />
      <br />
      name: {pcInfo.pcName}<br />
      age: {pcInfo.age}<br />
      job: {pcInfo.job}<br />

      Status:<br />
      HP:{pcInfo.status.hp}, MP:{pcInfo.status.mp}, SAN:{pcInfo.status.san}
    </div>
  )
}

export default PcCard
