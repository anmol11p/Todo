import React, { useEffect, useState } from 'react'

const DateandTime = () => {
    const [datetime,setDateTime]=useState('')

    useEffect(()=>{
       const interval= setInterval(() => {
        const date=` ${new Date().toLocaleDateString()}`;
        const time=`${new Date().toLocaleTimeString()}`;
        setDateTime(`${date} ${time}`)
    }, 1000);

return ()=> clearInterval(interval)

  
},[])


  return (
    <div>{datetime} </div>
  )
}

export default DateandTime