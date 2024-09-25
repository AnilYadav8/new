import React, { useState} from 'react'

const Clock = () => {
    let [time,SetTime]=useState()
    // let [calendar,SetCalendar]=useState()
    

    setInterval(()=>{
        let samay = new Date().toLocaleTimeString()
        // let samay1 = new Date().toLocalecalendarString()
        SetTime(samay)
        // SetCalendar(samay1)

    })
  return (
    <div>
      <h1>{time}</h1>
      {/* <h2>{calendar}</h2> */}

    </div>
  )
}

export default Clock