import React from 'react'

import './TimeRest.css'

const TimeRest = ({data}) => {
  return (
    data && (
    <div className='timeRest'>
        <p>{data[0]}:</p>
        <p>{data[1]}</p>
    </div>)
  )
}

export default TimeRest